package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static io.restassured.RestAssured.given;

public class BpdtsApiTests {
    public static String rootURL = "http://bpdts-test-app-v2.herokuapp.com/";
    public static String cityEndPoint = "city/london/users";
    public static String instructionsEndpoint = "/instructions";
    public static String usersEndpoint = "/users";
    public static String usersEndpointWithuserId = "/user/1000";

    @Given("^I am an API user$")
    public void i_am_an_API_user() {

    }

    @When("^I access city enpoint with London$")
    public void i_access_city_enpoint_with_London() {


    }

    @Then("^I see city end point response succesful$")
    public void i_see_response_as()  {
        given().
                when().
                get(rootURL+cityEndPoint).
                then().
                assertThat().statusCode(200)
               ;
    }

    @When("^I access instructions enpoint$")
    public void i_access_instructions_enpoint() {
        // Write code here that turns the phrase above into concrete actions
        ;
    }

    @Then("^I see instruction endpoint response succesful$")
    public void i_see_instructions_response_as()  {
        given().
                when().
                get(rootURL+instructionsEndpoint).
                then().
                assertThat().statusCode(200)
        ;
    }

    @When("^I access users enpoint$")
    public void i_access_users_enpoint()  {
        // Write code here that turns the phrase above into concrete actions
        ;
    }
    @Then("^I see users endpoint response succesful$")
    public void i_see_users_response_as()  {
        given().
                when().
                get(rootURL+usersEndpoint).
                then().
                assertThat().statusCode(200)
        ;
    }

    @When("^I access users enpoint with userId$")
    public void i_access_users_enpoint_with_userId()  {
        // Write code here that turns the phrase above into concrete actions
        ;
    }

    @Then("^I see users endpoint with user id response succesful$")
    public void i_see_users_with_userId_response_as()  {
        given().
                when().
                get(rootURL+usersEndpointWithuserId).
                then().
                assertThat().statusCode(200)
        ;
    }
}
