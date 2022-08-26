package com.softwareProduct.controller;

import com.softwareProduct.common.APIResponse;
import com.softwareProduct.dto.GlobalPayloadDataDTO;
import com.softwareProduct.dto.LoginRequestDTO;
import com.softwareProduct.dto.SignUpRequestDTO;
import com.softwareProduct.dto.TokenDTO;
import com.softwareProduct.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.validation.MessageCodesResolver;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.config.annotation.*;

import java.util.List;

@Controller
//@CrossOrigin(origins = "*", allowedHeaders = "authorization")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    private GlobalPayloadDataDTO globalPayloadDataDTO;

    @PostMapping("/register")
    public ResponseEntity<APIResponse> signUp(@RequestBody SignUpRequestDTO signUpRequestDTO) {
        APIResponse apiResponse = loginService.signUp(signUpRequestDTO);

        return ResponseEntity
                .status(apiResponse.getStatus())
                .body(apiResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<APIResponse> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        APIResponse apiResponse = loginService.login(loginRequestDTO);

        return ResponseEntity
                .status(apiResponse.getStatus())
                .body(apiResponse);
    }

    @GetMapping("/privateApi")
    public ResponseEntity<APIResponse> privateApi(@RequestHeader(value="authorization", defaultValue = "") String auth) throws Exception {
        APIResponse apiResponse = new APIResponse();

        apiResponse.setData("This is private Api");

        //System.out.println(globalPayloadDataDTO.getUserId());

        return ResponseEntity
                .status(apiResponse.getStatus())
                .body(apiResponse);
    }

    @PostMapping("/refreshToken")
    public ResponseEntity<APIResponse> refreshToken(@RequestBody TokenDTO tokenDTO) throws Exception {

        APIResponse apiResponse = loginService.refreshToken(tokenDTO);

        return ResponseEntity
                .status(apiResponse.getStatus())
                .body(apiResponse);
    }

}
