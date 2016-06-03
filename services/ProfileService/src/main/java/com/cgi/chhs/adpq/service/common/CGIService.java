package com.cgi.chhs.adpq.service.common;


import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import org.springframework.stereotype.Component;
import com.cgi.chhs.adpq.service.micro.ServiceHealth;


@Component
@Path("/service")
public class CGIService {

	public ServiceHealth serviceHealth = new ServiceHealth("CGI-ADPQ: Profile Microservice Up and Running!!");	
	
	@GET
	@Path("/health")
    @Produces("application/json")
    public ServiceHealth health() {
        return serviceHealth;
    }

}
