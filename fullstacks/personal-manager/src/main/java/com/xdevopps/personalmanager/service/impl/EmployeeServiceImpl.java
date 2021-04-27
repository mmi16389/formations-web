package com.xdevopps.personalmanager.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.xdevopps.personalmanager.persistence.model.Employee;
import com.xdevopps.personalmanager.service.IEmployeeService;

public class EmployeeServiceImpl implements IEmployeeService{

	@Autowired
	private IEmployeeService employeeRepo;

	@Override
	public Optional<Employee> findById(Long id) {
		return employeeRepo.findById(id);
	}

	@Override
	public Employee save(Employee employee) {
		return employeeRepo.save(employee);
	}
}
