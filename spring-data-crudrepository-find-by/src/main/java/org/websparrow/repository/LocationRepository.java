package org.websparrow.repository;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.websparrow.entity.Location;
@Repository
public interface LocationRepository extends CrudRepository<Location, String> 
{
		List<Location> findBytracking(String tracking);	
}

