package com.brunini.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brunini.dsmovie.dto.CommentDTO;
import com.brunini.dsmovie.services.CommentService;

@RestController
@RequestMapping(value ="/comments")
public class CommentController {
	@Autowired
	private CommentService service;
	
	@PostMapping
	public void saveComment(@RequestBody CommentDTO dto) {
		service.saveComment(dto);
	}

}
