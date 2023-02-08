package com.example.demo.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Entity.Admin;
@Repository
public interface Adminrepository extends CrudRepository<Admin, String> 
{
	@Query(value = "SELECT * FROM admin t WHERE t.username=:username and t.password=:password", nativeQuery = true)
	Admin findByPasswordAndUsername(String username,String password);
	Optional<Admin>findByUsernameAndPassword(String username,String password);
	List<Admin>findAll();
//	List<Admin>findByPassword(String password);	
}
