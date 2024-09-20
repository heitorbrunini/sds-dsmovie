package com.brunini.dsmovie.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.brunini.dsmovie.dto.UserDTO;
import com.brunini.dsmovie.entities.User;
import com.brunini.dsmovie.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	@Transactional(readOnly = true)	
	public List<UserDTO> findAll(){
		
		List<User> data = repository.findAll();
	    List<UserDTO> dtos = new ArrayList<>(); 
	    
	    data.forEach(usr -> dtos.add(new UserDTO(usr)));
	    
	    return dtos;
	}
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		UserDTO dto = new UserDTO(repository.getById(id));
		return dto;
	}
	
	
	public void postUser(UserDTO user) {		
		repository.save(new User (user.email()));
	}
	
	public void deleteUser(UserDTO user) {
		repository.deleteById(user.id());;
	}
	
}
