package com.xdevopps.personalmanager.config;


import com.xdevopps.personalmanager.admin.Admin;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


//@Configuration
public class PersistenceConfig {
    @Bean
    public static Admin adminBean() {
        return new Admin();
    }
}
