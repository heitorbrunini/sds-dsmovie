package com.brunini.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunini.dsmovie.entities.Comment;
import com.brunini.dsmovie.entities.ScorePK;

public interface CommentRepository extends JpaRepository<Comment, ScorePK> {

}
