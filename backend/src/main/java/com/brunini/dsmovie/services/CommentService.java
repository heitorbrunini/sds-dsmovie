package com.brunini.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.brunini.dsmovie.dto.CommentDTO;
import com.brunini.dsmovie.entities.Comment;
import com.brunini.dsmovie.entities.Movie;
import com.brunini.dsmovie.entities.User;
import com.brunini.dsmovie.repositories.CommentRepository;
import com.brunini.dsmovie.repositories.MovieRepository;
import com.brunini.dsmovie.repositories.UserRepository;

@Service
public class CommentService {
	
	@Autowired
	private MovieRepository movieRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CommentRepository commentRepository;
	
	@Transactional
	public Comment saveComment(CommentDTO dto) {
		
		User user = userRepository.findByEmail(dto.email());
		
		if (user==null) {
			user = new User();
			user.setEmail(dto.email());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.movieId()).get();
		
		Comment comment = new Comment();
		comment.setMovie(movie);
		comment.setUser(user);
		comment.setComment(dto.comment());
		
		comment = commentRepository.saveAndFlush(comment);
		
		return comment;
	}
}
