package com.example.demo.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.CourierEntity;
import com.example.demo.Entity.CustomerEntity;
import com.example.demo.repository.LocationRepository;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/location")
public class LocationController 
{
	@Autowired
	private LocationRepository locationrepository;
	
	@GetMapping("/{id}")
	public List<CustomerEntity> getlocationById(@PathVariable("id") String id) 
	{

		return locationrepository.findBytracking(id);

	}
	@GetMapping
	public List<CustomerEntity> getAllProducts()
	{
		return locationrepository.findAll();
	}
}
