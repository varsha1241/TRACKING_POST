package com.example.demo.Controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Admin;
import com.example.demo.repository.Adminrepository;
import com.example.demo.request.LoginRequest;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/admin")
public class AdminController 
{
	@Autowired
	private Adminrepository adminrepository;
	
	@GetMapping
	public List<Admin> getAllProducts(){
		return adminrepository.findAll();
	}
//	@GetMapping("/{pass}")
//	public List<Admin> getadminbypswd(@PathVariable("pass")String password) 
//	{
//		System.out.println(password);
//		return adminrepository.findByPassword(password);
//
//	}
	@GetMapping("/{id}/{pass}")
	public ResponseEntity getadmin(@PathVariable("id") String username,@PathVariable("pass")String password) 
	{
//		System.out.println(password);
//		System.out.println(username);
		Admin admin = adminrepository.findByPasswordAndUsername(username,password);
		if(admin == null) {
			return ResponseEntity.status(200).body("{\"Message\": \"NotMatched\"}");
		}
		return ResponseEntity.status(200).body("{\"Message\": \"Matched\"}");

	}
	@PostMapping("/login")
	public ResponseEntity VerifyAdmin(@RequestBody LoginRequest loginrequest)
	{
		System.out.println(loginrequest.getPassword());
		System.out.println(loginrequest.getUsername());
		Optional<Admin> admin = adminrepository.findByUsernameAndPassword(loginrequest.getUsername(), loginrequest.getPassword());
		if(admin.isEmpty()) {
			return ResponseEntity.status(404).body("");
		}
		return ResponseEntity.status(200).body("Matched");
	}
}
