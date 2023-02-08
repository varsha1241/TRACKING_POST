package com.example.demo.service;
import java.util.List;
import com.example.demo.Entity.IntermediateEntity;
public interface IntermediateService 
{
	IntermediateEntity saveLogin(IntermediateEntity intermediateentity);
	List<IntermediateEntity> getAllLogins();
}
