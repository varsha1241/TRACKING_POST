package com.example.demo.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.IntermediateEntity;
import com.example.demo.repository.Intermediaterepository;
@Service
public class IntermediateServiceImpl implements IntermediateService
{
	@Autowired
	private Intermediaterepository interrepository;

	@Override
	public IntermediateEntity saveLogin(IntermediateEntity intermediateentity) 
	{
		return interrepository.save(intermediateentity);
	}

	@Override
	public List<IntermediateEntity> getAllLogins() 
	{
		return interrepository.findAll();
	}
}
