package com.brunini.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.brunini.dsmovie.dto.MovieDTO;
import com.brunini.dsmovie.entities.Movie;
import com.brunini.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page= result.map(x -> new MovieDTO(x));		
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO (result);
		return dto;
	}
	
	public Movie createMovie(MovieDTO data) {
		Movie movie = new Movie(data);
		repository.save(movie);
		return movie;
	}
	
	public Page<MovieDTO> findByCategory(String category,Pageable pageable){
		Page<Movie> result = repository.findByCategory(category, pageable);
		Page<MovieDTO> page= result.map(x -> new MovieDTO(x));		
		return page;
	}
	
	public MovieDTO findByTitle(String title) {
	
		MovieDTO dto = new MovieDTO (repository.findByTitle(title));
		return dto;
	}
	
	
		
}
