package com.brunini.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brunini.dsmovie.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	Category findByName(String name);
}
