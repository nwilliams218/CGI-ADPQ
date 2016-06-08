package com.cgi.chhs.adpq.service.profile.service.micro;

import com.cgi.chhs.adpq.service.micro.SaveStatus;
import com.cgi.chhs.adpq.service.profile.entity.Message;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import javax.inject.Inject;
import javax.ws.rs.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by michael on 6/5/16.
 */
@CrossOrigin
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
            message.setBody(params.get("body"));
            message.setSubject(params.get("subject"));
            message.setFromId(Integer.parseInt(params.get("from")));
            message.setToId(Integer.parseInt(params.get("to")));
            saveStatus.setSuccess(true);
            saveStatus.setMessage(message.getBody());
            repository.save(message);
        } catch (Exception e) {
            saveStatus.setSuccess(false);
            saveStatus.setMessage(e.getMessage());
            return saveStatus;
        }
        return saveStatus;
    }
    @Path("/get/{id}")
    @GET
    @Produces("application/json")
    public List<Message> getMessages(@PathParam("id") Integer id) {
        List messages = new ArrayList<Message>();
        for (Message m: repository.findAll()) {
            if (m.getToId() == id || m.getFromId() == id) {
                messages.add(m);
            }
        }
        return messages;
    }

}
