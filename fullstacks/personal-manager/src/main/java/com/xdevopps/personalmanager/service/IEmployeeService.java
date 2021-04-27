package com.xdevopps.personalmanager.service;

import java.util.Optional;

import com.xdevopps.personalmanager.persistence.model.Employee;

public interface IEmployeeService {
	
      Optional<Employee> findById(Long id);
	
	  Employee save(Employee employee);
}
