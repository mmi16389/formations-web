package com.config;


import com.xdevopps.personalmanager.persistence.repository.impl.EmployeeRepositoryImpl;
import com.xdevopps.personalmanager.shareable.Language;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class ShareableConfig {

	@Bean(initMethod = "initialize", destroyMethod = "destroy")
	public Language shareableBean() {
		return new Language();
	}

	@Bean
	public EmployeeRepositoryImpl employeeRepository() {
		return new EmployeeRepositoryImpl();
	}
}
