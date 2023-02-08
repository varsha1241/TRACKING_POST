package com.example.demo.service;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.example.demo.Entity.CourierEntity;
public interface CourierService 
{
	ResponseEntity<String> saveLogin(String track,CourierEntity courierentity);
	List<CourierEntity> getAllLogins();
	ResponseEntity<Optional<CourierEntity>> getProductByid(String track);
	ResponseEntity<CourierEntity> updateProductById(String track, CourierEntity courierentity);
	ResponseEntity<Map<String, Boolean>> deleteProductById(String id);
}
