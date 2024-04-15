package net.javaguides.springboot.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import net.javaguides.springboot.model.User;
import org.springframework.http.HttpStatus;

public class ApiResponseDTO {
    private HttpStatus httpStatus;

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    public Boolean isSucess() {
        return isSucess;
    }

    public void setSucess(boolean sucess) {
        isSucess = sucess;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    private Boolean isSucess;

    public ApiResponseDTO(HttpStatus httpStatus, Boolean isSucess, String message, Object data) {
        this.httpStatus = httpStatus;
        this.isSucess = isSucess;
        this.message = message;
        this.data = data;
    }

    private String message;

    private Object data;

}
