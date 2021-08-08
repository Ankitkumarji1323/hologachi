package com.hologachi.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hologachi.backend.model.HomePost;
import com.hologachi.backend.repository.HomeRepository;

@RestController
public class HomeController {
	
	@Autowired
	HomeRepository homeRepository;
	
	@RequestMapping("/home")
	public List<HomePost> findAll() {
		return homeRepository.findAll();
	}
	
}