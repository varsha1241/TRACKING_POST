package com.example.demo.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.CustomerEntity;
import com.example.demo.repository.Customerrepository;
@Service
public class CustomerServiceImpl implements CustomerService 
{
	@Autowired
	private Customerrepository customerrepository;

	@Override
	public ResponseEntity<String> saveLogin(String tracking,CustomerEntity customerentity) 
	{
		Boolean courier=customerrepository.existsById(tracking);
		System.out.println(courier);
		String value="{\"Message\": \"NotMatched\"}";
		if(courier==false)
		{
			customerentity.setEmail(customerentity.getEmail());
			customerentity.setFrom_id(customerentity.getFrom_id());
			customerentity.setPhone(customerentity.getPhone());
			customerentity.setProduct_shiped(customerentity.getProduct_shiped());
			customerentity.setTracking(customerentity.getTracking());
			customerrepository.save(customerentity);
			value="{\"Message\": \"INSERTED\"}";	
			System.out.println(value);
		}
//		return value;
		return ResponseEntity.ok(value);
	}

	@Override
	public List<CustomerEntity> getAllLogins() 
	{
		return customerrepository.findAll();
	}

	@Override
	public ResponseEntity<Optional<CustomerEntity>> getProductByid(String tracking) 
	{
		return ResponseEntity.ok(customerrepository.findById(tracking));
	}

	@Override
	public ResponseEntity<CustomerEntity> updateProductById(String tracking, CustomerEntity customerentity) 
	{
		CustomerEntity customer=customerrepository.findById(tracking).orElseThrow();
		customer.setEmail(customerentity.getEmail());
		customer.setPhone(customerentity.getPhone());
		customer.setProduct_shiped(customerentity.getProduct_shiped());
		CustomerEntity updatedProduct=customerrepository.save(customer);
		return ResponseEntity.ok(updatedProduct);
	}
	@Override
	public ResponseEntity<Map<String, Boolean>> deleteProductById(String tracking) 
	{
		CustomerEntity courier=customerrepository.findById(tracking).orElseThrow();
		customerrepository.delete(courier);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}


