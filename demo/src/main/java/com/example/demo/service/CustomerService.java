package com.example.demo.service;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.ResponseEntity;

import com.example.demo.Entity.CustomerEntity;
public interface CustomerService 
{
	ResponseEntity<String> saveLogin(String tracking,CustomerEntity customerentity);
	List<CustomerEntity> getAllLogins();
	ResponseEntity<Optional<CustomerEntity>> getProductByid(String tracking);
	ResponseEntity <CustomerEntity> updateProductById(String tracking, CustomerEntity customerentity);
	ResponseEntity<Map<String, Boolean>> deleteProductById(String id);
}

