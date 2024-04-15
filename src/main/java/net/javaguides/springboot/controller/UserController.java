package net.javaguides.springboot.controller;

import net.javaguides.springboot.DTO.ApiResponseDTO;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.RepoService.UserrepoService;
import net.javaguides.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/user")
public class UserController {
     @Autowired
    private UserRepository userRepository;

     @Autowired
     private UserrepoService userrepoService;

     @GetMapping
    public List<User> getAllUser(){
         return userRepository.findAll();
     }

     //create user rest API
    @PostMapping(value = "/createUser",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ApiResponseDTO> createUser(@RequestBody User user){
         User user1=userrepoService.findByEmailId(user.getEmailId());
         if (user1==null){
             userRepository.save(user);

             return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ApiResponseDTO(HttpStatus.ACCEPTED,true,"User Added Successfully", user));
         }
         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponseDTO(HttpStatus.BAD_REQUEST,false,"User already exist", null));
    }
    @DeleteMapping("{email}")
    public ResponseEntity<HttpStatus> deleteUserByEmail(@PathVariable String email) {
        User user = userRepository.findByEmailId(email);
        if (user == null) {
            throw new ResourceNotFoundException("User not exist with email: " + email);
        }
        userRepository.delete(user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PutMapping("{email}")
    public ResponseEntity<User> updateUserByEmail(@PathVariable String email, @RequestBody User userDetails) {
        User updateUser = userRepository.findByEmailId(email);
        if (updateUser == null) {
            throw new ResourceNotFoundException("User not exist with email: " + email);
        }

        // Update the user details with the values from the request body
        updateUser.setEmailId(userDetails.getEmailId());
        updateUser.setFirstName(userDetails.getFirstName());
        updateUser.setLastName(userDetails.getLastName());
        updateUser.setMobileNo(userDetails.getMobileNo());
        updateUser.setDob(userDetails.getDob());
        updateUser.setAddress(userDetails.getAddress());

        userRepository.save(updateUser);

        return ResponseEntity.ok(updateUser);
    }




    @GetMapping("{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email){
        User user = userRepository.findByEmailId(email);
        if (user == null) {
            throw new ResourceNotFoundException("User not exist with email: " + email);
        }
        return ResponseEntity.ok(user);
    }

//    @GetMapping("{id}")
//    public ResponseEntity<User> getUserById(@PathVariable long id){
//        User user=userRepository.findById(id)
//                .orElseThrow(() ->new ResourceNotFoundException("User not exist with id:"+id));
//        return ResponseEntity.ok(user);
//    }

//    @PutMapping("{id}")
//    public ResponseEntity<User> updateUser(@PathVariable long id,@RequestBody User userDetails){
//        User updateUser=userRepository.findById(id)
//                .orElseThrow(() ->new ResourceNotFoundException("User not exist with id:"+id));
//        updateUser.setEmailId(userDetails.getEmailId());
//        updateUser.setFirstName(userDetails.getFirstName());
//        updateUser.setLastName(userDetails.getLastName());
//        updateUser.setMobileNo(userDetails.getMobileNo());
//        updateUser.setDob(userDetails.getDob());
//        updateUser.setAddress(userDetails.getAddress());
//        userRepository.save(updateUser);
//        return ResponseEntity.ok(updateUser);
//
//    }

    //    @DeleteMapping("{id}")
//    public ResponseEntity<HttpStatus> deleteUser(@PathVariable long id){
//        User user=userRepository.findById(id)
//                .orElseThrow(() ->new ResourceNotFoundException("User not exist with id: "+id));
//        userRepository.delete(user);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }



}
