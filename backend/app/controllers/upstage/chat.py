# Upstage Chat API 연동을 위한 ChatClient 클래스
import requests
from typing import List, Dict, Optional


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

if __name__ == "__main__":
    import os
    from dotenv import load_dotenv

    load_dotenv(".env/data.env")
    api_key = os.getenv("API_KEY")
    client = ChatClient(api_key)
    messages = [
        {"role": "system", "content": "당신은 계산기다. 질문에 대한 답을 계산해서 제공한다."},
        {"role": "user", "content": "1+1은 뭐게?"}
    ]
    response = client.chat(messages=messages, model="solar-1-mini-chat")
    msg = response.get("choices", [{}])[0].get("message", {}).get("content", "")
    print(f"Response: {msg}")