"""from beanie import PydanticObjectId
import fastapi
from fastapi import BackgroundTasks, Depends, HTTPException, Request, Response

from app.models import (
    UseCaseDescription,
    UseCaseStatus,
    Status,
    UseCaseUpdate,
    StatusCode,
)
from app.models.registration.document import (
    UseCaseDocument,
    UseCaseDocumentDescription,
    UseCaseDocumentDescriptionUpdate,
    UseCaseDocumentFull,
)
from app.mongo import UseCase
from app.mongo.user import User
from app.security.auth import get_user_from_cookie, get_user_from_header, auth_service


router = fastapi.APIRouter(tags=["registration"])


@router.get("/api/useCases", response_model=list[UseCaseStatus])
async def get_all_use_cases() -> list[UseCaseStatus]:
    """Read all registered use cases."""

    use_cases: list[UseCase] = await UseCase.find(
        fetch_links=True,
    ).to_list()

    return [UseCaseStatus.from_orm(use_case) for use_case in use_cases] """