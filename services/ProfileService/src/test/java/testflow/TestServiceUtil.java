package testflow;

import static com.jayway.restassured.RestAssured.when;
import static org.hamcrest.Matchers.containsString;

import org.junit.Rule;
import org.junit.rules.Timeout;

import com.jayway.restassured.RestAssured;

public class TestServiceUtil {
	
	@Rule public Timeout globalTimeout = new Timeout(200000);
	
	 public static final void setup()
	 {
	        RestAssured.baseURI  = "http://localhost";
	        RestAssured.port     = 8080;
	        RestAssured.basePath = "/service";
	        getHealthcheckPing();
	 }
	 
	 public static void getHealthcheckPing() {
	        when().get("/health").
	        then().body(containsString("CGI-ADPQ: Profile Microservice Up and Running!!"));
	    }

}
