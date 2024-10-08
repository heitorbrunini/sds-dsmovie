package com.brunini.dsmovie.dto;

import com.brunini.dsmovie.entities.Category;
import com.brunini.dsmovie.entities.Movie;

public record MovieDTO (Long id, String title, Double score, Integer count, String image, Category Category) {

	public MovieDTO(Movie movie) {
        this(
            movie.getId(),
            movie.getTitle(),
            movie.getScore(),
            movie.getCount(),
            movie.getImage(),
            movie.getCategory()
        );
    }
		
}
