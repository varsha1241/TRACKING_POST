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
import com.example.demo.Entity.CustomerEntity;
import com.example.demo.repository.Customerrepository;
import com.example.demo.service.CustomerService;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/customer")
public class CustomerController 
{
	@Autowired
	private CustomerService customerservice;
	@Autowired
	private Customerrepository customerrepository;
	
	@PostMapping("{id}")
	public ResponseEntity<String> saveProduct(@PathVariable("id") String id,@RequestBody CustomerEntity customerentity) {
		return customerservice.saveLogin(id,customerentity);
	}
	
	@GetMapping
	public List<CustomerEntity> getAllProducts(){
		return customerservice.getAllLogins();
	}
	@GetMapping("customerid/{id}")

	public ResponseEntity<Optional<CustomerEntity>>  getCustomerById(@PathVariable("id") String id) 
	{
		return customerservice.getProductByid(id);
	}
	@PutMapping("modifycust/{id}")
	public ResponseEntity<CustomerEntity> updateProductByid(@PathVariable("id") String id,@RequestBody CustomerEntity customerentity) {
		return customerservice.updateProductById(id, customerentity);
	}
	@GetMapping("/getid")
	public List<String> getIdAlone()
	{
		return customerrepository.findidAlone();
	}
	@DeleteMapping("/delete/{id}")
	public String deleteProductById(@PathVariable("id") String id) {
	customerservice.deleteProductById(id);
		return "Product deleted Successfully";
	}
}