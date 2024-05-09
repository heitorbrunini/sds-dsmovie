package com.brunini.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brunini.dsmovie.dto.ScoreDTO;
import com.brunini.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value ="/scores")
public class ScoreController {
	@Autowired
	private ScoreService service;
	
	@PostMapping
	public void saveScore (@RequestBody ScoreDTO score){
		service.saveScore(score);
	}
}