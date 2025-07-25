package portfolio.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import portfolio.backend.exception.ErrorStatus;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@JsonPropertyOrder({"timestamp", "code", "message", "result"}) // JSON 응답 시 순서를 정의
public class ApiResponse<T> {

    private final LocalDateTime timestamp = LocalDateTime.now();
    private final int code;
    private final String message;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private T result;

    public static <T> ApiResponse<T> success(T result) {
        return new ApiResponse<>(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), result);
    }

    public static <T> ApiResponse<T> success() {
        return new ApiResponse<>(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), null);
    }

    public static <T> ApiResponse<T> error(ErrorStatus errorStatus) {
        return new ApiResponse<>(errorStatus.getHttpStatus().value(), errorStatus.getMessage(), null);
    }
}