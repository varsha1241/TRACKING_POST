package org.websparrow.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.websparrow.entity.Location;
import org.websparrow.repository.LocationRepository;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/location")
public class LocationController 
{
	@Autowired
	private LocationRepository locationrepository;
	
	@GetMapping("/{id}")
	public List<Location> getlocationById(@PathVariable("id") String id) 
	{

		return locationrepository.findBytracking(id);

	}
}
