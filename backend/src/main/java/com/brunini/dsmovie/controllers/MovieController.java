package com.brunini.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brunini.dsmovie.dto.MovieDTO;
import com.brunini.dsmovie.services.MovieService;

@RestController
@RequestMapping(value ="/movies")
public class MovieController {
	@Autowired
	private MovieService service;
	
	@GetMapping
	public Page<MovieDTO> findAll (Pageable pageable){
		return service.findAll(pageable);
	}
	
	@GetMapping (value = "/{id}")
	public MovieDTO findById (@PathVariable Long id){
		return service.findById(id);
	}
	
	@GetMapping (value = "name/{title}")
	public MovieDTO findByTitle (@PathVariable String title){
		return service.findByTitle(title);
	}
	
	@GetMapping (value = "/filter/{category}")
	public Page<MovieDTO> findByCategory (@PathVariable String category, Pageable pageable){
		return service.findByCategory(category, pageable);
	}
}