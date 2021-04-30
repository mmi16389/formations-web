package com.xdevopps.personalmanager.persistence.repository.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.xdevopps.personalmanager.persistence.model.Employee;
import com.xdevopps.personalmanager.persistence.repository.IEmployeeRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;

@Repository
public class EmployeeRepositoryImpl implements IEmployeeRepository{

	String 
	List<Employee> employees = new ArrayList<>();

	public EmployeeRepositoryImpl() {
		super();
	}
	@PostConstruct
	public void setup() {
		Employee employee = new Employee(1L, "Spring Course", "admin");
		employees.add(employee);
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
