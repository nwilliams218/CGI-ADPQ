package com.cgi.chhs.adpq.service.profile.service.micro;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import com.cgi.chhs.adpq.service.common.CGIService;
import com.cgi.chhs.adpq.service.micro.SaveStatus;
import com.cgi.chhs.adpq.service.profile.entity.Profile;

import java.util.HashMap;

@Component
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProfileService extends CGIService{


	@Inject
	public ProfileRepository repository;

	@Path("/view/{id}")
	@GET
    @Produces("application/json")
	public Profile view(@PathParam("id") Long id)
	{

		return repository.findOne(id);
	}

	@Path("/updateProfile")
	@POST
    @Produces("application/json")
    public SaveStatus editProfile(@RequestBody Profile profileObj){
        SaveStatus editStatus = new SaveStatus();
        try {
            Profile profileDBObj = repository.findOne(profileObj.getId());
            profileDBObj.setPassword(profileObj.getPassword());
            profileDBObj.setAddress(profileObj.getAddress());
            profileDBObj.setEmail(profileObj.getEmail());

            repository.save(profileDBObj);
            editStatus.setSuccess(true);
            editStatus.setMessage("Profile updated  successfully and a notification has been sent to the case worker.");
            return editStatus;
        } catch(Exception e) {
            editStatus.setSuccess(false);
            editStatus.setMessage("Profile updation failed and notification has been sent to the case worker.");
            return editStatus;
        }
    }

	@Path("/addProfile")
	@POST
	@Produces("application/json")
	public SaveStatus addProfile(@RequestBody HashMap<String, String> params) {
		SaveStatus saveStatus = new SaveStatus();

		try {
			Profile profile = new Profile();
			profile.setAddress(params.get("address"));
			profile.setEmail(params.get("email"));
			profile.setPassword(params.get("password"));
            profile.setHouseholdId(Integer.parseInt(params.get("household_id")));
			repository.save(profile);
			saveStatus.setSuccess(true);
			saveStatus.setMessage("Profile added successfully and a notification has been sent to the case worker.");
			saveStatus.setSavedObjectId(profile.getId());
			return saveStatus;
		} catch (Exception e) {
			saveStatus.setSuccess(false);
			saveStatus.setMessage("Adding  profile failed, a notification has been sent to the case worker.");
			return saveStatus;
		}
	}

}
