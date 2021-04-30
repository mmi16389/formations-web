package com.xdevopps.personalmanager.service.impl;

import java.util.Optional;

import com.xdevopps.personalmanager.admin.Admin;
import com.xdevopps.personalmanager.persistence.repository.IEmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;

import com.xdevopps.personalmanager.persistence.model.Employee;
import com.xdevopps.personalmanager.service.IEmployeeService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class EmployeeServiceImpl implements IEmployeeService, ApplicationContextAware {

	private static final Logger LOG = LoggerFactory.getLogger(IEmployeeService.class);

	private IEmployeeRepository employeeRepo;

	public EmployeeServiceImpl(IEmployeeRepository employeeRepo) {
		super();
		this.employeeRepo = employeeRepo;
	}

	@Override
	public Optional<Employee> findById(Long id) {
		return employeeRepo.findById(id);
	}

	@Override
	public Employee save(Employee employee) {
		return employeeRepo.save(employee);
	}

	@PostConstruct
	public void initAdmin(){
		LOG.info("show inti bean at log");
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		LOG.info("CONTEXT WITH ID '{}' SET", applicationContext.getId());
	}
}
