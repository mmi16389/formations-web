package com.xdevopps.spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.xdevopps.personalmanager.persistence.repository.impl.EmployeeRepositoryImpl;

@Configuration
public class PersistenceConfig {
	
	@Bean
	public EmployeeRepositoryImpl employeeRepository() {
		return new EmployeeRepositoryImpl();
	}

}
