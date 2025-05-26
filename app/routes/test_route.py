from fastapi import APIRouter, UploadFile
from app.services import test_service

router = APIRouter(
    prefix="/test",
)

@router.post("/", )
async def test_endpoint(
    docs_req: UploadFile,
    docs_assign: UploadFile,
):
    return await test_service.process_documents(docs_req, docs_assign)