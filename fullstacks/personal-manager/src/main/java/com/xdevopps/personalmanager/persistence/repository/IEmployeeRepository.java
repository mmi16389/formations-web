package com.xdevopps.personalmanager.persistence.repository;

import java.util.Optional;

import com.xdevopps.personalmanager.persistence.model.Employee;

public interface IEmployeeRepository {

	Optional<Employee> findById(Long id);
	
	Employee save(Employee employee);
	
}
