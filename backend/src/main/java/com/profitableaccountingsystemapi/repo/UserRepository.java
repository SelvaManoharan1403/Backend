package com.profitableaccountingsystemapi.repo;

import com.profitableaccountingsystemapi.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    User findOneByEmailIdIgnoreCaseAndPassword(String emailId, String password);

    User findByRefreshToken(String refreshToken);
}
