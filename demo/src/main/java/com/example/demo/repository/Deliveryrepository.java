package com.example.demo.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.Entity.Delivery;
public interface Deliveryrepository extends JpaRepository<Delivery,String> 
{
	@Query(value = "SELECT id FROM delivery", nativeQuery = true)
	List<String>findidAlone();
}
