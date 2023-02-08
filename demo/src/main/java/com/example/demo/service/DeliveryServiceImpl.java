package com.example.demo.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.Delivery;
import com.example.demo.repository.Deliveryrepository;
@Service
public class DeliveryServiceImpl implements DeliveryService 
{
	@Autowired
	private Deliveryrepository deliveryrepository;

	@Override
	public Delivery saveLogin(Delivery deliveryentity) 
	{
		return  deliveryrepository.save(deliveryentity);
	}

	@Override
	public ResponseEntity<Optional<Delivery>> getProductByid(String id)
	{
		return ResponseEntity.ok(deliveryrepository.findById(id));
	}


	
}
