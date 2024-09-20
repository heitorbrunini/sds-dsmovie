package com.brunini.dsmovie.dto;

import com.brunini.dsmovie.entities.User;

public record UserDTO (long id, String email){

	public UserDTO(User user) {
		
		this(				
				user.getId(),
				user.getEmail()
			);
		
	}

}
