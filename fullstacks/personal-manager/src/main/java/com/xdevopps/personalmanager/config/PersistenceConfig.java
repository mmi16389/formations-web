package com.xdevopps.personalmanager.config;

import com.xdevopps.personalmanager.persistence.repository.impl.EmployeeRepositoryImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


//@Configuration
public class PersistenceConfig {
	@Bean
	public EmployeeRepositoryImpl employeeRepository() {
		return new EmployeeRepositoryImpl();
	}
}
