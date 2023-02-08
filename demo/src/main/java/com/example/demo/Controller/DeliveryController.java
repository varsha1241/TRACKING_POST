package com.example.demo.Controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.Delivery;
import com.example.demo.repository.Deliveryrepository;
import com.example.demo.service.DeliveryService;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/delivery")
public class DeliveryController 
{
	@Autowired
	private DeliveryService deliveryservice;
	@Autowired
	private Deliveryrepository devliveryrepo;
	
	@PostMapping
	public Delivery saveProduct(@RequestBody Delivery deliveryentity) 
	{
		return deliveryservice.saveLogin(deliveryentity);
	}
	@GetMapping("/{id}")

	public ResponseEntity<Optional<Delivery>>  getDeliveryBoyById(@PathVariable("id") String id) 
	{
		return deliveryservice.getProductByid(id);
	}	
	@GetMapping
	public List<String> getAllProducts()
	{
		return devliveryrepo.findidAlone();
	}
}
