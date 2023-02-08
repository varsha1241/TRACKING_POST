package com.example.demo.Controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.CourierEntity;
import com.example.demo.repository.Courierrepository;
import com.example.demo.service.CourierService;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/courier")
public class CourierController 
{
		@Autowired
		private CourierService courierservice;
		
		@Autowired
		private Courierrepository courierrepsository;
		
		@PostMapping("{id}")
		public ResponseEntity<String>  saveProduct(@PathVariable("id") String id,@RequestBody CourierEntity courierentity) {
			return courierservice.saveLogin(id,courierentity);
		}
		@GetMapping
		public List<CourierEntity> getAllProducts(){
			return courierservice.getAllLogins();
		}
		@GetMapping("courierid/{id}")
		public ResponseEntity<Optional<CourierEntity>> getProductById(@PathVariable("id") String id) 
		{
			return courierservice.getProductByid(id);
		}
		@PutMapping("/modifycourier/{id}")
		public ResponseEntity<CourierEntity> updateProductByid(@PathVariable("id") String id,@RequestBody CourierEntity courierentity) 
		{
			return courierservice.updateProductById(id, courierentity);
		}
		@DeleteMapping("/delete/{id}")
		public String deleteProductById(@PathVariable("id") String id) {
			courierservice.deleteProductById(id);
			return "Product deleted Successfully";
		}
		@GetMapping("/{id}/{pass}")
		public ResponseEntity getadmin(@PathVariable("id") String track,@PathVariable("pass")String deliveryboypin) 
		{
//			System.out.println(password);
//			System.out.println(username);
			CourierEntity courier=courierrepsository.findByTrackAndDeliveryboypin(track,deliveryboypin);
			if(courier == null) {
				return ResponseEntity.status(200).body("{\"Message\": \"NotMatched\"}");
			}
			return ResponseEntity.status(200).body("{\"Message\": \"Matched\"}");

		}
		
}
