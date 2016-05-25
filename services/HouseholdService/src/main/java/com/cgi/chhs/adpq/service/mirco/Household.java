package com.cgi.chhs.adpq.service.mirco;

import java.util.List;

/**
 * Created by michael on 5/25/16.
 */
public class Household {
    private String id;
    private String name;
    private String address;
    private List<Integer> caseworkerids; // this may not be correct - assumes no joins
    private List<Integer> profileIds; // this may not be correct - assumes no joins

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Integer> getCaseworkerids() {
        return caseworkerids;
    }

    public void setCaseworkerids(List<Integer> caseworkerids) {
        this.caseworkerids = caseworkerids;
    }

    public List<Integer> getProfileIds() {
        return profileIds;
    }

    public void setProfileIds(List<Integer> profileIds) {
        this.profileIds = profileIds;
    }
}
