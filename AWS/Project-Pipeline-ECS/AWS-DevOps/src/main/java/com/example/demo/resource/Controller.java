package com.example.demo.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
public class Controller {
	private final UserService userService;

	public Controller(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<User> findUserById(@PathVariable Integer id) {
		Optional<User> user = userService.findById(id);
		
		if (user.isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(user.get());
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@GetMapping(value = {"/users", "/"})
	public ResponseEntity<List<User>> findUserById() {
		List<User> users = userService.findAll();
		
		return ResponseEntity.ok(users);
	}
}
