package net.javaguides.springboot.repository.RepoService;

import net.javaguides.springboot.model.User;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
public interface UserrepoService {
    User findByEmailId(String email);
}
