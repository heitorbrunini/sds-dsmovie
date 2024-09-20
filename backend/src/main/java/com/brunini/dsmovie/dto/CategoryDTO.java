package com.brunini.dsmovie.dto;

import com.brunini.dsmovie.entities.Category;

public record CategoryDTO(long id, String title) {

	public CategoryDTO(Category category){
		this(
				category.getId(),
				category.getName()
			);
	}

}
