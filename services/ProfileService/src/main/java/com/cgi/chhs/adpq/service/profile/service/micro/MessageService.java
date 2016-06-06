package com.cgi.chhs.adpq.service.profile.service.micro;

import com.cgi.chhs.adpq.service.micro.SaveStatus;
import com.cgi.chhs.adpq.service.profile.entity.Message;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import javax.inject.Inject;
import javax.ws.rs.*;
import java.util.HashMap;

/**
 * Created by michael on 6/5/16.
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@Component
@Path("/messages")
public class MessageService {
    @Inject
    public MessageRepository repository;

    @Path("/view/{id}")
    @GET
    @Produces("application/json")
    public Message view(@PathParam("id") Long id) {
        return repository.findOne(id);
    }

    @Path("/send")
    @POST
    @Produces("application/json")
    public SaveStatus sendMessage(@RequestBody HashMap<String, String> params) {
        SaveStatus saveStatus = new SaveStatus();
        try {
            Message message = new Message();
            message.setContent(params.get("content"));
            message.setProfileId(Long.parseLong(params.get("profile")));
            message.setCaseworkerId(Long.parseLong(params.get("caseworker")));
            repository.save(message);
        } catch (Exception e) {
            saveStatus.setSuccess(false);
            saveStatus.setMessage("Adding  message failed, a notification has been sent to the case worker.");
            return saveStatus;
        }
        return saveStatus;
    }

}
