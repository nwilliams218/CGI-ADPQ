package com.cgi.chhs.adpq.service.profile.service.micro;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import com.cgi.chhs.adpq.service.common.CGIService;
import com.cgi.chhs.adpq.service.micro.SaveStatus;
import com.cgi.chhs.adpq.service.profile.entity.Profile;

@Component

public class ProfileService extends CGIService {

	@Inject
	public ProfileRepository repository;

	@Path("/viewprofile/{id}")
	@GET
	@Produces("application/json")
	public Profile view(@PathParam("id") Long id) {

		return repository.findOne(id);
	}

	@Path("/updateProfile")
	@POST
	@Produces("application/json")
	public SaveStatus editProfile(@RequestBody Profile profileObj) {

		SaveStatus editStatus = new SaveStatus();
		try {

			if (repository.exists(profileObj.getId())) {
				Profile profileDBObj = repository.findOne(profileObj.getId());
				profileDBObj.setPassword(profileObj.getPassword());
				profileDBObj.setAddress(profileObj.getAddress());
				profileDBObj.setContact(profileObj.getContact());
				profileDBObj.setEmail(profileObj.getEmail());
				repository.save(profileDBObj);
				editStatus.setSuccess(true);
				editStatus.setMessage(
						"Profile updated  successfully and a notification has been sent to the case worker.");
			} else {
				editStatus.setSuccess(false);
				editStatus.setMessage("Profile couldnt be found !!");
			}
			return editStatus;
		} catch (Exception e) {
			editStatus.setSuccess(false);
			editStatus.setMessage("Profile updation failed and notification has been sent to the case worker.");
			return editStatus;
		}

	}

	@Path("/addProfile")
	@POST
	@Produces("application/json")
	public SaveStatus addProfile(@RequestBody Profile profileObj) {
		SaveStatus saveStatus = new SaveStatus();

		try {
			repository.save(profileObj);
			saveStatus.setSuccess(true);
			saveStatus.setMessage("Profile added successfully and a notification has been sent to the case worker.");
			saveStatus.setSavedObjectId(profileObj.getId());
			return saveStatus;
		} catch (Exception e) {
			saveStatus.setSuccess(false);
			saveStatus.setMessage("Adding  profile failed, a notification has been sent to the case worker.");
			return saveStatus;

		}

	}

	@Path("/readProfile")
	@POST
	@Produces("application/json")
	public Profile readProfile(@RequestBody Profile profileObj) {
		Profile profileDBObj = null;
		try {
			profileDBObj = repository.findOne(profileObj.getId());
			return profileDBObj;
		} catch (Exception e) {

			return profileDBObj;

		}

	}
	
	@Path("/delProfile/{id}")
	@GET
	@Produces("application/json")
	public SaveStatus delProfile(@PathParam("id") Long id) {
		SaveStatus saveStatus = new SaveStatus();
		try {

			if (repository.exists(id))
			{
				repository.delete(id);
				saveStatus.setSuccess(true);
				saveStatus.setMessage(
						"Profile deleted successfully and a notification has been sent to the case worker.");
				saveStatus.setSavedObjectId(id);
			} else {
				saveStatus.setSuccess(false);
				saveStatus.setMessage("Profile couldnt be found ");
				saveStatus.setSavedObjectId(id);

			}
			return saveStatus;
		} catch (Exception e) {

			saveStatus.setSuccess(false);
			saveStatus.setMessage("Adding  profile failed, a notification has been sent to the case worker.");
			return saveStatus;

		}

	}

}
