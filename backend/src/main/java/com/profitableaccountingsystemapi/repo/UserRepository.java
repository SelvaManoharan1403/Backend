package com.profitableaccountingsystemapi.repo;

import com.profitableaccountingsystemapi.entity.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {

    UserModel findOneByEmailIdIgnoreCaseAndPassword(String emailId, String password);

    UserModel findOneByEmailId(String emailId);
    UserModel findByResetToken(String resetToken);
}
