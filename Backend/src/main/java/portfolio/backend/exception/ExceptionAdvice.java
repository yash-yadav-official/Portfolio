package portfolio.backend.exception;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import portfolio.backend.dto.ApiResponse;

@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler(RestApiException.class)
    public ResponseEntity<ApiResponse<Void>> handleRestApiException(RestApiException ex) {
        ErrorStatus errorStatus = ex.getErrorStatus();

        ApiResponse<Void> errorResponse = ApiResponse.error(errorStatus);
        return ResponseEntity
                .status(errorStatus.getHttpStatus())
                .body(errorResponse);
    }
}