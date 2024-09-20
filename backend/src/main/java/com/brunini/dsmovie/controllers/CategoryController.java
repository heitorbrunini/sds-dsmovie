package com.brunini.dsmovie.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brunini.dsmovie.dto.CategoryDTO;
import com.brunini.dsmovie.entities.Category;
import com.brunini.dsmovie.services.CategoryService;

@RestController
@RequestMapping(value ="/categories")
public class CategoryController {
	@Autowired
	private CategoryService service;
	
	@GetMapping
	public List<Category> findAll (){
		return service.findAll();
	}
	
	@PostMapping
	public void postCategory(@RequestBody Category category ) {
		CategoryDTO dto = new CategoryDTO (category);
		service.postCategory(dto);
	}
	
	@DeleteMapping
	public void deleteCategory(@RequestBody Category category) {
		CategoryDTO dto = new CategoryDTO (category);
		service.deleteCategory(dto);
	}
	
	@PutMapping
	public void updateCategory(@RequestBody Category category) {
		CategoryDTO dto = new CategoryDTO (category);
		service.updateCategory(dto);
	}
	
}
