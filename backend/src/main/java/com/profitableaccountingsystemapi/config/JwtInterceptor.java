package com.profitableaccountingsystemapi.config;

import com.profitableaccountingsystemapi.dto.GlobalPayloadDataDTO;
import com.profitableaccountingsystemapi.util.JwtUtils;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class JwtInterceptor extends HandlerInterceptorAdapter {
    @Autowired
    private JwtUtils jwtUtils;

    private GlobalPayloadDataDTO globalPayloadDataDTO;

    public JwtInterceptor(GlobalPayloadDataDTO globalPayloadDataDTO) {
        this.globalPayloadDataDTO = globalPayloadDataDTO;
    }
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String auth = request.getHeader("authorization");
        String url = request.getRequestURI();
        if(!(url.contains("login") || url.contains("register") || url.contains("refreshToken"))) {
            Claims claims = jwtUtils.verify(auth);

            globalPayloadDataDTO.setUserId(claims.getIssuer());
            globalPayloadDataDTO.setUserName(claims.get("name").toString());
        }

        return super.preHandle(request, response, handler);
    }
}
