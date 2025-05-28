import requests
from typing import Optional, List


class DocumentParser:
    BASE_URL = "https://api.upstage.ai/v1/document-digitization"

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.headers = {"Authorization": f"Bearer {self.api_key}"}

    def parse_document(
        self, file_path: str, model: str = "document-parse", **params
    ) -> dict:
        with open(file_path, "rb") as f:
            files = {"document": f}
            data = {
                "model": model,
                "chart_recognition": params.get("chart_recognition", False),
                "ocr": params.get("ocr", "force"),
                "output_formats": str(params.get("output_formats", ["html"])),
                "coordinates": params.get("coordinates", False),
                "base64_encoding": str(params.get("base64_encoding", ["table"])),
            }
            response = requests.post(
                self.BASE_URL, headers=self.headers, files=files, data=data
            )
            return response.json()


if __name__ == "__main__":
    import os
    from dotenv import load_dotenv
    import json

    load_dotenv(".env/data.env")

    dp = DocumentParser(api_key=os.getenv("API_KEY"))
    result = dp.parse_document(
        file_path="test.pdf",
        model="document-parse",
        chart_recognition=False,
        ocr="force",
        output_formats=["html"],
        coordinates=False,
        base64_encoding=["table"]
    )
    print(result)