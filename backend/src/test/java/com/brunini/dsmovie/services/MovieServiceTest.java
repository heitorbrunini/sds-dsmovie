package com.brunini.dsmovie.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.ActiveProfiles;

import com.brunini.dsmovie.dto.MovieDTO;
import com.brunini.dsmovie.entities.Movie;
import com.brunini.dsmovie.repositories.MovieRepository;

@DataJpaTest
@ActiveProfiles("test")
class MovieServiceTest {

	// creates a "fake" repository
	@Mock
	private MovieRepository repository;

	// inject the fake repository into the service to make queries
	@InjectMocks
	private MovieService service;
	
	@BeforeEach
	public void setup() {
		MockitoAnnotations.openMocks(this);
	}
	
	@Test
	@DisplayName("Should get movies sucessfully from DB")
	void testFindAll() {
		
		Movie movie1 = new Movie(1L,"Segredo dos inocentes", 5.0, 2, "image.png", "categoria1");
		Movie movie2 = new Movie(2L,"O profisisonal", 4.9, 4, "image.png", "categoria2");		
		

        List<Movie> moviesList = Arrays.asList(movie1, movie2);
        Page<Movie> moviesPage = new PageImpl<>(moviesList);

        // Configure mock repository to return moviePage when findAll be called with any Pageable.class
        when(repository.findAll(any(Pageable.class))).thenReturn(moviesPage);
		
		Pageable firstPageWithTwoElements = PageRequest.of(0, 2);
		Page<MovieDTO> movies = service.findAll(firstPageWithTwoElements);
		
		assertEquals(2, movies.getSize());			
		verify(repository,times(1)).findAll(any(Pageable.class));
	}
	
	@Test
	@DisplayName("Should get movie by ID sucessfully from DB")
	void testFindId() {
		
		Movie movie= new Movie(1L,"Segredo dos inocentes", 5.0, 2, "image.png", "categoria2");
		
		//you are testing the service, so you need input the value in repository
		when(repository.findById(1L)).thenReturn(Optional.of(movie));
		
		MovieDTO foundMovie = service.findById(1L);
		
		assertThat(foundMovie).isNotNull();
		
	}
	
	
}
