package com.brunini.dsmovie.repositories;

import com.brunini.dsmovie.entities.Comment;
import com.brunini.dsmovie.entities.Score;
import com.brunini.dsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, ScorePK> {

}
