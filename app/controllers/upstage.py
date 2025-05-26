import requests
from typing import Optional, List, Dict

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
    
class ChatClient:
    BASE_URL = "https://api.upstage.ai/v1/chat/completions"

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}

    def chat(
        self,
        messages: List[Dict[str, str]],
        model: str = "solar-1-mini-chat",
        temperature: float = 0.7,
        top_p: float = 1.0,
        stream: bool = False,
        reasoning_effort: Optional[str] = None,
        max_tokens: Optional[int] = None,
        response_format: Optional[Dict] = None,
        **params
    ) -> dict:
        payload = {
            "model": model,
            "messages": messages,
            "temperature": temperature,
            "top_p": top_p,
            "stream": stream,
        }
        if reasoning_effort is not None:
            payload["reasoning_effort"] = reasoning_effort
        if max_tokens is not None:
            payload["max_tokens"] = max_tokens
        if response_format is not None:
            payload["response_format"] = response_format
        payload.update(params)
        response = requests.post(
            self.BASE_URL, headers=self.headers, json=payload
        )
        response_data = response.json()
        #return ChatCompletionResponse.from_dict(response_data)
        return response_data

class ChatCompletionResponse:
    def __init__(self, id: str, object: str, created: int, model: str, choices: List[Dict], usage: Dict, system_fingerprint: Optional[str] = None):
        self.id = id
        self.object = object
        self.created = created
        self.model = model
        self.choices = choices
        self.usage = usage
        self.system_fingerprint = system_fingerprint

    @classmethod
    def from_dict(cls, data: Dict) -> "ChatCompletionResponse":
        return cls(
            id=data.get("id"),
            object=data.get("object"),
            created=data.get("created"),
            model=data.get("model"),
            choices=data.get("choices", []),
            usage=data.get("usage", {}),
            system_fingerprint=data.get("system_fingerprint"),
        )