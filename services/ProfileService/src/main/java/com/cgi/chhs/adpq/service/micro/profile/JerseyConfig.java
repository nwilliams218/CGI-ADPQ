package com.cgi.chhs.adpq.service.micro.profile;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JerseyConfig extends ResourceConfig{
	
	public JerseyConfig() {
        register(ProfileService.class);
    }
}
