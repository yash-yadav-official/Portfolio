from typing import Optional


class CustomException(Exception):
    def __init__(
        self,
        status_code: int,
        message: str,
        reason: str,
        field: Optional[str] = None,
    ):
        self.status_code = status_code
        self.message = message
        self.field = field
        self.reason = reason
        super().__init__(message)