package com.learning.restApiScratch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.learning.*" })
    @EnableJpaRepositories
public class RestApiScratchApplication {

    public static void main(String[] args)
    {
        SpringApplication.run(RestApiScratchApplication.class, args);
    }

}
