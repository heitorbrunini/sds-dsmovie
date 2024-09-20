package com.brunini.dsmovie.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brunini.dsmovie.dto.UserDTO;
import com.brunini.dsmovie.services.UserService;

@RestController
@RequestMapping(value ="/users")
public class UserController {

	@Autowired
	private UserService service;
	
	@GetMapping
	public List<UserDTO> findAll (){
		return service.findAll();
	}
	
	@PostMapping
	public void postCategory(@RequestBody UserDTO user ) {
		service.postUser(user);
	}
	
	@DeleteMapping
	public void deleteCategory(@RequestBody UserDTO user) {
		service.deleteUser(user);
	}
	@GetMapping (value = "/{id}")
	public UserDTO findById (@PathVariable Long id){
		return service.findById(id);
	}
}
