package com.brunini.dsmovie.services;

import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import com.brunini.dsmovie.repositories.MovieRepository;

@DataJpaTest
@ActiveProfiles("test")
class MovieServiceTest {
	@Autowired
	MovieRepository repository;

	@Autowired
	EntityManager entityManager;
	
	@Test
	@DisplayName("Should get movies sucessfully from DB")
	void testFindAll() {
		fail("Not yet implemented"); // TODO
	}

	@Test
	void testFindById() {
		fail("Not yet implemented"); // TODO
	}

}
