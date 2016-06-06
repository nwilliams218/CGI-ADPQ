package com.cgi.chhs.adpq.service.profile.service.micro;

import com.cgi.chhs.adpq.service.common.SimpleCORSFilter;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration
@CrossOrigin
public class JerseyConfig extends ResourceConfig{
	
	public JerseyConfig() {
        register(SimpleCORSFilter.class);
        register(ProfileService.class);
        register(CaseworkerService.class);
    }
}
