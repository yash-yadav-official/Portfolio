from fastapi import FastAPI, Depends  # FastAPI 임포트

from AI.container import dependency
from AI.model import response_models
from AI.model.ChatDTO import MessageDTO
from AI.model.response_models import SuccessResponse
from AI.service import document_service
from AI.service.document_service import DocumentService

app = FastAPI()


@app.post("/chat/message")
async def chat_message(
        message_data: MessageDTO,
        document: DocumentService = Depends(dependency.get_document_service())
) -> response_models.SuccessResponse:
    print(f"Received message: {message_data.message}")
    return SuccessResponse(result={""})