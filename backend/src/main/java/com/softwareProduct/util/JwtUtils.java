package com.softwareProduct.util;

import com.softwareProduct.entity.RefreshToken;
import com.softwareProduct.entity.User;
import com.softwareProduct.exception.AccessDeniedException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtils {

    @Value("secret")
    private String jwtSecret;

    @Value("100")
    private int expiryDuration;

    @Value("10050")
    private int refreshTokenExpirationMs;

    public String generateJwt(User user) {

        long milliTime = System.currentTimeMillis();
        long expiryTime = milliTime + expiryDuration * 1000;

        Date issuedAt = new Date(milliTime);
        Date expiryAt = new Date(expiryTime);

        // claims
        Claims claims = Jwts.claims()
                .setIssuer(user.getId().toString())
                .setIssuedAt(issuedAt)
                .setExpiration(expiryAt);

        claims.put("name", user.getName());

        //generate jwt using claims
        return Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .compact();
    }

    public Claims verify(String authorization) throws Exception {
        try {
            Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authorization).getBody();
            return claims;
        } catch (Exception e) {
            throw new AccessDeniedException("Access Denied...");
        }

    }

    public String generateRefreshToken(User user) {
        long milliTime = System.currentTimeMillis();
        long expiryTime = milliTime + refreshTokenExpirationMs * 1000;
        Date expiryAtNew = new Date(expiryTime);

        Date issuedAt = new Date(milliTime);

        Claims claims = Jwts.claims()
                .setIssuer(user.getId().toString())
                .setIssuedAt(issuedAt)
                .setExpiration(expiryAtNew);

        claims.put("name", user.getName());

        return Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .compact();
    }
}
