from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from AI.service.document_service import DocumentService
from AI.utils.db import get_db


def get_document_service(db: AsyncSession = Depends(get_db)) -> DocumentService:
    """
    DocumentService를 의존성 주입을 통해 반환합니다.
    """
    return DocumentService()
