import os
from fastapi import UploadFile, File
from app.controllers.upstage.document_parser import DocumentParser
from app.controllers.upstage.chat import ChatClient
async def process_documents(docs_req: UploadFile, docs_assign: UploadFile):
    # Process the uploaded documents
    location_req = await save_uploaded_file(docs_req)
    location_assign = await save_uploaded_file(docs_assign)
    dp = DocumentParser(api_key=os.getenv("API_KEY"))
    parsed_req = dp.parse_document(
        file_path=location_req,
        model="document-parse",
        chart_recognition=True,
        ocr="force",
        output_formats=["html"],
        coordinates=False,
        base64_encoding=["table"]
    )
    parsed_assign = dp.parse_document(
        file_path=location_assign,
        model="document-parse",
        chart_recognition=True,
        ocr="force",
        output_formats=["html"],
        coordinates=False,
        base64_encoding=[]
    )
    html_req = parsed_req.get("content", {}).get("html", "")
    html_assign = parsed_assign.get("content", {}).get("html", "")
    client = ChatClient(api_key=os.getenv("API_KEY"))
    messages = [
        {"role": "system", "content": "너는 학생이 제출한 과제가 과제의 요구 사항을 얼마나 잘 반영했는지 구체적이고 논리적으로 평가하는 역할이야. 너의 임무는 다음과 같다.\n\n1. 주어진 각 과제 요구 사항마다, 학생이 제출한 과제가 해당 요구 사항을 충족하고 있는지 세부적인 근거와 함께 확인해줘.\n2. 학생이 제출한 과제가 충족하고 있는 요구 사항의 개수를 마지막에 명확하게 알려줘.\n3. 만약 충족하지 못한 요구 사항이 있다면, 그 이유를 구체적으로 설명하고 학생이 보완할 수 있는 개선 방안도 함께 제시해줘.\n\n평가는 객관적이고 논리적으로 진행하며, 학생이 더 발전할 수 있도록 친절하고 명확하게 안내해줘."},
        {"role": "user", "content": f"요청 문서 내용: {html_req}"},
        {"role": "user", "content": f"과제 문서 내용: {html_assign}"}
    ]
    response = client.chat(
        messages=messages,
    )

    return {
        "parsed_request": parsed_req["content"]["html"],
        "parsed_assignment": parsed_assign["content"]["html"],
        "chat_response": response["choices"][0]["message"]["content"]
    }
    

async def save_uploaded_file(uploaded_file: UploadFile = File(...)):
    """
    Save the uploaded file to a temporary location.
    """
    file_location = f"temp/{uploaded_file.filename}"
    with open(file_location, "wb") as file:
        file.write(await uploaded_file.read())
    return file_location
