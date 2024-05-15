package com.brunini.dsmovie.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import com.brunini.dsmovie.dto.ScoreDTO;
import com.brunini.dsmovie.entities.Movie;
import com.brunini.dsmovie.entities.Score;
import com.brunini.dsmovie.entities.ScorePK;
import com.brunini.dsmovie.entities.User;
import com.brunini.dsmovie.repositories.MovieRepository;
import com.brunini.dsmovie.repositories.ScoreRepository;
import com.brunini.dsmovie.repositories.UserRepository;

@DataJpaTest
@ActiveProfiles("test")
class ScoreServiceTest {

	// creates a "fake" repository
	@Mock
	private ScoreRepository scoreRepository;
	@Mock
	private MovieRepository movieRepository;
	@Mock
	private UserRepository userRepository;

	// inject the fake repository into the service to make queries
	@InjectMocks
	private ScoreService service;
	
	@BeforeEach
	public void setup() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testSaveScore() {
		Movie movie = new Movie(1L,"Segredo dos inocentes", 5.0, 2, "image.png");		
		User user =  new User(1L, "bob@gmail.com");
		
		ScoreDTO data = new ScoreDTO(1L,"bob@gmail.com",5.0);
		
		ScorePK spk = new ScorePK(movie, user);
		
		Score savedScore = new Score(spk,5.0);
			
		when(movieRepository.save(any(Movie.class))).thenReturn(movie);
		when(movieRepository.findById(1L)).thenReturn(Optional.of(movie));
		
		when(userRepository.findByEmail(data.getEmail())).thenReturn(user);
		
		when(scoreRepository.saveAndFlush(any(Score.class))).thenReturn(savedScore);
				
		Score result = service.saveScore(data);
		
		verify(movieRepository).save(any(Movie.class));
		verify(movieRepository).findById(1L);
		
		verify(userRepository).findByEmail(data.getEmail());
		
		verify(scoreRepository).saveAndFlush(any(Score.class));		
		
		assertThat(result).isNotNull();
	}

}
