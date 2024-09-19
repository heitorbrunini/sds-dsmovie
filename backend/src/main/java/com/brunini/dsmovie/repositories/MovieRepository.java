package com.brunini.dsmovie.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.brunini.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
	 Page<Movie> findByCategory(String category, Pageable pageable);
	 
	 Movie findByTitle(String title);
}