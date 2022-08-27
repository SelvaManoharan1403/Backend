package com.profitableaccountingsystemapi.controller;

import com.profitableaccountingsystemapi.common.APIResponse;
import com.profitableaccountingsystemapi.dto.GlobalPayloadDataDTO;
import com.profitableaccountingsystemapi.dto.LoginRequestDTO;
import com.profitableaccountingsystemapi.dto.SignUpRequestDTO;
import com.profitableaccountingsystemapi.dto.TokenDTO;
import com.profitableaccountingsystemapi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
