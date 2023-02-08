package com.example.demo.service;
import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.Delivery;
public interface DeliveryService 
{
	Delivery saveLogin(Delivery deliveryentity);
	ResponseEntity<Optional<Delivery>> getProductByid(String id);
}
