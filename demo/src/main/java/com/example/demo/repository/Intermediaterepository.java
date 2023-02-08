package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.IntermediateEntity;
@Repository
public interface Intermediaterepository extends JpaRepository<IntermediateEntity,Long> 
{

//	@Query(value = "SELECT (to_id) FROM intermediate_entity", nativeQuery = true)
//	List<IntermediateEntity> findto_id();

}
