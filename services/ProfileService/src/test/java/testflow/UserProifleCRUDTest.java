package testflow;


import static com.jayway.restassured.RestAssured.expect;
import static com.jayway.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import com.cgi.chhs.adpq.service.profile.entity.Profile;


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class UserProifleCRUDTest {
	
	private static Integer userId;

	
	 	@Before
	    public void setup()	   {
	        TestServiceUtil.setup();
	    }

	    @Test
	    public void testACreate()
	    {
	    	
	    	Profile userTestProfile = new Profile();
	    	userTestProfile.setPassword("newPassword");
	    	userTestProfile.setEmail("email@new.com");
	    	userTestProfile.setAddress("newAddress");
	    	userTestProfile.setContact(9999);
	    	userId = given().contentType( "application/json" )
	               .and()
	               .body(userTestProfile )
	       .when().post( "/addProfile" )
	    
	    	.then().
	        statusCode(200).
	        extract().
	        path("savedObjectId");
	    	
	    	

	    }
	    
	    
	    /**
	     * We expect to find profile with the new record generated Id in the database.
	     */
	    @Test
	    public void testBRead()
	    {
	        expect().statusCode(200)
	        .when() .get ( "/viewprofile/"+userId);
	    }
	    
	    /**
	     * We expect to find profile entire profile details  with the new record generated Id whose values are the same in the database too.
	     */
	    @Test
	    public void testCRead_byId()
	    {
	        expect().body("id", equalTo(userId))
	                .body("password", equalTo("newPassword" ))
	                .body("email", equalTo( "email@new.com" ))
	                .body("address", equalTo( "newAddress" ))
	                .body("contact", equalTo(new Integer(9999)))
	        .when() .get ( "/viewprofile/"+userId);
	    }

	    /**
	     *Update record with the new record generated Id
	     */
	 
	    @Test
	    public void testDUpdate()
	    {
	    	Profile userTestProfile = new Profile();
	    	userTestProfile.setId(userId);
	    	userTestProfile.setPassword("testPassword");
	    	userTestProfile.setEmail("email@test.com");
	    	userTestProfile.setAddress("testAddress");
	    	userTestProfile.setContact(9999);
	    	given().contentType( "application/json" )
	               .and()
	               .body(userTestProfile )
	       .when().post( "/updateProfile" );
	        
	    }

	    
	    
	    /**
	     * We expect to find password for the new record generated Id (should be testPassword) in the database.
	     */
	    @Test
	    public void testEReadByPropertyAndValue()
	    {
	        expect().body("password", equalTo( "testPassword" ))
	        .when() .get ("/viewprofile/"+userId);
	    }

	   

	    /**
	     * We expect not to find profile  0 in the database.
	     */
	    @Test
	    public void testRead_byId_not_found()
	    {
	        expect().statusCode(204)
	       .when() .get ( "/viewprofile/0" );
	    }

	   


	   /*
	    @Test
	    public void testDelete()
	    {
	        String   json = get( "/delProfile/3" ).asString();
	        System.out.println("-- > Json"+json);
	        String   id   = JsonPath.with( json ).get( "id" );

	        expect().statusCode( 200 )
	        .when() .delete( "/delProfile/" + id );
	    }*/
}
