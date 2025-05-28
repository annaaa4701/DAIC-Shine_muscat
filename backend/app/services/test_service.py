import os
from fastapi import UploadFile, File
from app.controllers.upstage.document_parser import DocumentParser
from app.controllers.upstage.chat import ChatClient

prompt = open("./app/models/prompt.txt", "r", encoding="utf-8").read()
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

    if not html_req:
        return {
            "parsed_request": "",
            "parsed_assignment": "",
            "chat_response": parsed_req.get("error", {}).get("message", "ERROR")
        }
    if not html_assign:
        return {
            "parsed_request": html_req,
            "parsed_assignment": "",
            "chat_response": parsed_assign.get("error", {}).get("message", "ERROR")
        }


    client = ChatClient(api_key=os.getenv("API_KEY"))
    messages = [
        {"role": "system", "content": prompt},
        {"role": "user", "content": f"요청 문서 내용({location_req.replace("temp/", "")}): {html_req}"},
        {"role": "user", "content": f"과제 문서 내용({location_assign.replace("temp/", "")}): {html_assign}"}
    ]
    response = client.chat(
        model="solar-mini-250422",
        messages=messages,
    )

    chat_response = response.get("choices", [])[0].get("message", {}).get("content", "")
    if not chat_response:
        return {
            "parsed_request": html_req,
            "parsed_assignment": html_assign,
            "chat_response": chat_response.get("error", {}).get("message", "ERROR")
        }

    return {
        "parsed_request": html_req,
        "parsed_assignment": html_assign,
        "chat_response": chat_response
    }
    

async def save_uploaded_file(uploaded_file: UploadFile = File(...)):
    """
    Save the uploaded file to a temporary location.
    """
    file_location = f"temp/{uploaded_file.filename}"
    with open(file_location, "wb") as file:
        file.write(await uploaded_file.read())
    return file_location
