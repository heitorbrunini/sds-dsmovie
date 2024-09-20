package com.brunini.dsmovie.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brunini.dsmovie.dto.CategoryDTO;
import com.brunini.dsmovie.entities.Category;
import com.brunini.dsmovie.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository repository;
	
	public void postCategory(CategoryDTO dto) {
		Category category = new Category(dto.title());
		repository.save(category);
		
	}
	
	public void deleteCategory(CategoryDTO dto) {
		repository.deleteById(dto.id());
	}
	
	public void updateCategory(CategoryDTO dto) {
		Category category = repository.getById(dto.id());
		category.setName(dto.title());
		repository.save(category);
	}
	
	public List<Category> findAll() {
		return repository.findAll();
	}
	
}
