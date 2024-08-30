package com.brunini.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunini.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
