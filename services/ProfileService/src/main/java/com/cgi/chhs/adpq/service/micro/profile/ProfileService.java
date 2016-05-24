package com.cgi.chhs.adpq.service.micro.profile;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.springframework.stereotype.Component;

import com.cgi.chhs.adpq.service.micro.EditStatus;
import com.cgi.chhs.adpq.service.micro.ServiceHealth;

@Component
@Path("/profile")
public class ProfileService {
	
	private ServiceHealth serviceHealth = new ServiceHealth("CGI-ADPQ: Profile Microservice Up and Running!!");
	
	@GET
	@Path("/health")
    @Produces("application/json")
    public ServiceHealth health() {
        return serviceHealth;
    }

	@Path("/view")
	@GET
    @Produces("application/json")
	public Profile view()
	{
		Profile profile = new Profile();
		profile.setName("Babu");
		profile.setEmail("babu@cgi.com");
		return profile;
	}
	
	@Path("/edit")
	@GET
    @Produces("application/json")
	public EditStatus edit()
	{
		EditStatus editStatus = new EditStatus();
		editStatus.setSuccess(true);
		editStatus.setMessage("Profile saved successfully and a notification has been sent to the case worker.");
		return editStatus;
	}
	

}
