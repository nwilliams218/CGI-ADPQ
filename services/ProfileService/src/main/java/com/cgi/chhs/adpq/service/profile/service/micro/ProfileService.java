package com.cgi.chhs.adpq.service.profile.service.micro;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import com.cgi.chhs.adpq.service.micro.SaveStatus;
import com.cgi.chhs.adpq.service.micro.ServiceHealth;
import com.cgi.chhs.adpq.service.profile.entity.Profile;

@Component
@Path("/profile")
public class ProfileService {
	
	private ServiceHealth serviceHealth = new ServiceHealth("CGI-ADPQ: Profile Microservice Up and Running!!");
	
	@Inject
	private ProfileRepository repository;
	
	@GET
	@Path("/health")
    @Produces("application/json")
    public ServiceHealth health() {
        return serviceHealth;
    }

	@Path("/view/{id}")
	@GET
    @Produces("application/json")
	public Profile view(@PathParam("id") Long id)
	{
		//TODO: Add Error/Exception logic
		return repository.findOne(id);
	}
	
	@Path("/edit")
	@GET
    @Produces("application/json")
	public SaveStatus edit()
	{
		//TODO:Implement the logic here. Including error/exception logic.
		SaveStatus editStatus = new SaveStatus();
		editStatus.setSuccess(true);
		editStatus.setMessage("Profile saved successfully and a notification has been sent to the case worker.");
		return editStatus;
	}
	

	@Path("/addProfile")
	@POST
    @Produces("application/json")
	public SaveStatus addProfile(@RequestBody Profile profileObj)
	{		
		repository.save(profileObj);
		SaveStatus saveStatus = new SaveStatus();
		saveStatus.setSuccess(true);
		saveStatus.setMessage("Profile added successfully and a notification has been sent to the case worker.");
		saveStatus.setSavedObjectId(profileObj.getId());
		//TODO: Add Error/Exception logic
		return saveStatus;
	}
	
}
