package com.xdevopps.personalmanager.persistence.repository.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.xdevopps.personalmanager.persistence.model.Employee;
import com.xdevopps.personalmanager.persistence.repository.IEmployeeRepository;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeRepositoryImpl implements IEmployeeRepository{
	
	List<Employee> employees = new ArrayList<>();

	public EmployeeRepositoryImpl() {
		super();
	}

	@Override
	public Optional<Employee> findById(Long id) {
		return employees.stream().filter(p->p.getId() == id).findFirst();
	}

	@Override
	public Employee save(Employee employee) {
		 Employee existingEmployee = findById(employee.getId()).orElse(null);
		 
		 if(existingEmployee == null) {
			 employees.add(existingEmployee);
		 }
		 else {
			 employees.remove(existingEmployee);
			 Employee newEmployee = new Employee(employee);
			 employees.add(newEmployee);
		 }
		return employee;
	}

}
