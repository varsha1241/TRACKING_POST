package com.example.demo.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.CourierEntity;
import com.example.demo.Entity.CustomerEntity;
import com.example.demo.exception.ResourceNotFoundeexception.ResourceNotFoundException;
import com.example.demo.repository.Courierrepository;

@Service
public class CourierServiceImpl implements CourierService 
{
	@Autowired
	private Courierrepository courierrepository;

	@Override
	public ResponseEntity<String> saveLogin(String track,CourierEntity courierentity) 
	{
		Boolean courier=courierrepository.existsById(track);
		System.out.println(courier);
		String value="{\"Message\": \"NotMatched\"}";
		if(courier==false)
		{
			courierentity.setTrack(courierentity.getTrack());
			courierentity.setAddress(courierentity.getAddress());
			courierentity.setDate(courierentity.getDate());
			courierentity.setBill_amount(courierentity.getBill_amount());
			courierentity.setdeliveryboypin(courierentity.getdeliveryboypin());
			courierrepository.save(courierentity);
			value="{\"Message\": \"INSERTED\"}";	
			System.out.println(value);
		}
		return ResponseEntity.ok(value);
	}

	@Override
	public List<CourierEntity> getAllLogins() 
	{
		return courierrepository.findAll();
	}

	@Override
	public ResponseEntity<Optional<CourierEntity>> getProductByid(String track) 
	{
		return ResponseEntity.ok(courierrepository.findById(track));
	}

	@Override
	public ResponseEntity<CourierEntity> updateProductById(String track, CourierEntity courierentity) 
	{
		CourierEntity courier=courierrepository.findById(track).orElseThrow();
		courier.setAddress(courierentity.getAddress());
		courier.setDate(courierentity.getDate());
//		courier.setBill_amount(courierentity.getBill_amount());
		courier.setdeliveryboypin(courierentity.getdeliveryboypin());
		CourierEntity updatedProduct=courierrepository.save(courier);
		return ResponseEntity.ok(updatedProduct);
	}
	@Override
	public ResponseEntity<Map<String, Boolean>> deleteProductById(String productId) 
	{
		CourierEntity courier=courierrepository.findById(productId).orElseThrow();
		courierrepository.delete(courier);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
