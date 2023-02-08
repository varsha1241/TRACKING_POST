package com.example.demo.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.IntermediateEntity;
import com.example.demo.service.IntermediateService;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/intermediate")
public class IntermediateController 
{
	@Autowired
	private IntermediateService intermediateservice;
	
	@PostMapping
	public IntermediateEntity saveProduct(@RequestBody IntermediateEntity intermediateentity) {
		return intermediateservice.saveLogin(intermediateentity);
	}
	
	@GetMapping
	public List<IntermediateEntity> getAllProducts(){
		return intermediateservice.getAllLogins();
	}
//	@GetMapping("/to_id")
//	public List<IntermediateEntity> getAllId(){
//		return intermediateservice.getAllTo_id();
//	}
}
