package net.javaguides.springboot;

import net.javaguides.springboot.repository.UserRepository;
import net.javaguides.springboot.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}


	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
//        User user=new User();
//		user.setEmailId("anu@gmail.com");
//		user.setFirstName("Anu");
//		user.setLastName("S");
//		user.setMobileNo("7373646306");
//		user.setDob("10/03/2003");
//		user.setAddress("Coimbatore");
//		userRepository.save(user);

	}
}
