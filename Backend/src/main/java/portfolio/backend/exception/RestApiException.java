package portfolio.backend.exception;


import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RestApiException extends RuntimeException {
    private final ErrorStatus errorStatus;
}
