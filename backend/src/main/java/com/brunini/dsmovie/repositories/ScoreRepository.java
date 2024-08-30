package com.brunini.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunini.dsmovie.entities.Score;
import com.brunini.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
