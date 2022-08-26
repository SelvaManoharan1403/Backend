package com.softwareProduct.service;

import com.softwareProduct.common.APIResponse;
import com.softwareProduct.dto.LoginRequestDTO;
import com.softwareProduct.dto.SignUpRequestDTO;
import com.softwareProduct.dto.TokenDTO;
import com.softwareProduct.entity.User;
import com.softwareProduct.repo.UserRepository;
import com.softwareProduct.util.JwtUtils;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;

    public APIResponse signUp(SignUpRequestDTO signUpRequestDTO) {
        APIResponse apiResponse = new APIResponse();

        // dto to entity
        User userEntity = new User();
        userEntity.setName(signUpRequestDTO.getName());
        userEntity.setEmailId(signUpRequestDTO.getEmailId());
        userEntity.setActive(Boolean.TRUE);
        userEntity.setGender(signUpRequestDTO.getGender());
        userEntity.setPhoneNumber(signUpRequestDTO.getPhoneNumber());
        userEntity.setPassword(signUpRequestDTO.getPassword());

        //store entity
        userEntity = userRepository.save(userEntity);

        // return
        apiResponse.setData(userEntity);
        return apiResponse;
    }

    public APIResponse login(LoginRequestDTO loginRequestDTO) {
        APIResponse apiResponse = new APIResponse();


        //verify user exist

        User user = userRepository.findOneByEmailIdIgnoreCaseAndPassword(loginRequestDTO.getEmailId(), loginRequestDTO.getPassword());

        // response
        if (user == null) {
            apiResponse.setStatus(401);
            apiResponse.setData("User Login Failed");
            return apiResponse;
        }

        // generate JWT
        String token = jwtUtils.generateJwt(user);
        String tokenRefresh = jwtUtils.generateRefreshToken(user);

        Map<String, Object> data = new HashMap<>();
        data.put("accessToken", token);
        data.put("refreshToken", tokenRefresh);

        apiResponse.setData(data);

        return apiResponse;
    }

    public APIResponse refreshToken(TokenDTO tokenDTO) throws Exception {
        APIResponse apiResponse = new APIResponse();

        //User user = userRepository.findByRefreshToken();
        Claims claims = jwtUtils.verify(tokenDTO.getRefreshToken());

        tokenDTO.setId(claims.getIssuer());

        //System.out.println(tokenDTO.getId());

        User user = userRepository.findOne(tokenDTO.getId());
        //System.out.println(user.getPhoneNumber());

        //System.out.println(user.getEmailId());

        // response

        // generate Refresh JWT
        String tokenAccess = jwtUtils.generateJwt(user);
        String tokenRefresh = jwtUtils.generateRefreshToken(user);

        Map<String, Object> data = new HashMap<>();
        data.put("accessToken", tokenAccess);
        data.put("refreshToken", tokenRefresh);

        apiResponse.setData(data);

        return apiResponse;
    }
}
