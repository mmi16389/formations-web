package com.xdevopps.personalmanager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class TestApp {
	private static final Logger LOG = LoggerFactory.getLogger(TestApp.class);

	public static void main(String[] args) {
		SpringApplication.run(TestApp.class, args);

		AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
		LOG.info("context created with id {}", ctx.getId());
	}
}
