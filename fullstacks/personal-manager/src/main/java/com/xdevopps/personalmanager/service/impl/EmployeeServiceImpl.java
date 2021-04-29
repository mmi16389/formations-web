package com.xdevopps.personalmanager.service.impl;

import java.util.Optional;

import com.xdevopps.personalmanager.persistence.repository.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import com.xdevopps.personalmanager.persistence.model.Employee;
import com.xdevopps.personalmanager.service.IEmployeeService;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class EmployeeServiceImpl implements IEmployeeService{

    @Autowired
	private IEmployeeRepository employeeRepo;

	public EmployeeServiceImpl() {
	   super();
	}

	@Override
	public Optional<Employee> findById(Long id) {
		return employeeRepo.findById(id);
	}

	@Override
	public Employee save(Employee employee) {
		return employeeRepo.save(employee);
	}

}
