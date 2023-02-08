package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import com.example.demo.Entity.CustomerEntity;
@Repository
public interface Customerrepository extends JpaRepository<CustomerEntity,String> 
{
	@Query(value = "SELECT track FROM customer", nativeQuery = true)
	List<String>findidAlone();
}

