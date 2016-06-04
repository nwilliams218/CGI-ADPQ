package com.cgi.chhs.adpq.service.mirco;

import com.cgi.chhs.adpq.service.mirco.entity.Household;
import org.springframework.stereotype.Component;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 * Created by michael on 6/4/16.
 */
@Component
@Path("/household")
public class HouseholdService  {
    @Inject
    public HouseholdRepository repository;

    @Path("/view/{id}")
    @GET
    @Produces("application/json")
    public Household view(@PathParam("id") Long id) {
        return repository.findOne(id);
    }
}
