package com.d3n15tecback.controller;

import com.d3n15tecback.user.User;
import com.d3n15tecback.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile")
public class ProfileController {

    private final UserRepository userRepository;

    @GetMapping("/{item}")
    public ResponseEntity<User> getByUser(@PathVariable("item") String item) {
        Optional<User> user = userRepository.findByEmail(item);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }
        else {
            return null;
        }
    }

}
