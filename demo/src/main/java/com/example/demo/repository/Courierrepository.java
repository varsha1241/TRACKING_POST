package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.CourierEntity;
@Repository
public interface Courierrepository extends JpaRepository<CourierEntity,String> 
{
	@Query(value = "SELECT * FROM customer t WHERE t.track=:track and t.deliveryboypin=:deliveryboypin", nativeQuery = true)
	CourierEntity findByTrackAndDeliveryboypin(String track, String deliveryboypin);
	
}
