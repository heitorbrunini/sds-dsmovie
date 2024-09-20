package com.brunini.dsmovie.dto;

import com.brunini.dsmovie.entities.Score;

public record ScoreDTO (Long movieId, String email,Double score,String comment) {

	public ScoreDTO(Score score) {
		this(
				score.getId().getMovie().getId(),
				score.getId().getUser().getEmail(),
				score.getValue(),
				score.getComment()
			);
	}
	
}
