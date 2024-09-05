package com.brunini.dsmovie.dto;

import com.brunini.dsmovie.entities.Comment;

public record CommentDTO(Long movieId, String email,String comment) {

	public CommentDTO(Comment comment) {
		this(
				comment.getId().getMovie().getId(),
				comment.getId().getUser().getEmail(),
				comment.getComment()
			);
	}
	
}