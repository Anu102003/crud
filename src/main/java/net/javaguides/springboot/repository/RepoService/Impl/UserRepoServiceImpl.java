package net.javaguides.springboot.repository.RepoService.Impl;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.RepoService.UserrepoService;
import net.javaguides.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRepoServiceImpl implements UserrepoService {
    @Autowired
    UserRepository userRepository;


    @Override
    public User findByEmailId(String email) {
        return userRepository.findByEmailId(email);
    }
}
