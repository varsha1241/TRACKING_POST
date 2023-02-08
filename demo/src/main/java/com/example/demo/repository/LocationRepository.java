package com.example.demo.repository;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Entity.CustomerEntity;
@Repository
public interface LocationRepository extends CrudRepository<CustomerEntity, String> 
{
		List<CustomerEntity> findBytracking(String tracking);

		List<CustomerEntity> findAll();	
}
