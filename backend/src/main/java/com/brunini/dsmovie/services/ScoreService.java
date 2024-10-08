package com.brunini.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.brunini.dsmovie.dto.ScoreDTO;
import com.brunini.dsmovie.entities.Movie;
import com.brunini.dsmovie.entities.Score;
import com.brunini.dsmovie.entities.User;
import com.brunini.dsmovie.repositories.MovieRepository;
import com.brunini.dsmovie.repositories.ScoreRepository;
import com.brunini.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public Score saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.email());
		
		if (user==null) {
			user = new User();
			user.setEmail(dto.email());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.movieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.score());
		score.setComment(dto.comment());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum =0.0;
		for (Score s : movie.getScores()) {
			sum += s.getValue();
		}
		
		movie.setScore(sum / movie.getScores().size());
		movie.setCount(movie.getScores().size());
		
		movie=movieRepository.save(movie);
		return score;
	}
	
	@Transactional(readOnly = true)
	public Page<ScoreDTO> findAll(Pageable pageable) {
		Page<Score> data = scoreRepository.findAll(pageable);
		Page<ScoreDTO> result = data.map(x -> new ScoreDTO(x));
		return result;
	}
		
}
