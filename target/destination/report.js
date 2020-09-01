$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bpdtsApiTest.feature");
formatter.feature({
  "line": 1,
  "name": "bpdts api tests",
  "description": "",
  "id": "bpdts-api-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "verify get method response for city endpoint",
  "description": "",
  "id": "bpdts-api-tests;verify-get-method-response-for-city-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I am an API user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I access city enpoint with London",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I see city end point response succesful",
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsApiTests.i_am_an_API_user()"
});
formatter.result({
  "duration": 196286973,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_access_city_enpoint_with_London()"
});
formatter.result({
  "duration": 42003,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_see_response_as()"
});
formatter.result({
  "duration": 1910756545,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "verify get method response for Instructions endPoint",
  "description": "",
  "id": "bpdts-api-tests;verify-get-method-response-for-instructions-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am an API user",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I access instructions enpoint",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see instruction endpoint response succesful",
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsApiTests.i_am_an_API_user()"
});
formatter.result({
  "duration": 104772,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_access_instructions_enpoint()"
});
formatter.result({
  "duration": 34909,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_see_instructions_response_as()"
});
formatter.result({
  "duration": 79603888,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify get method response for Users endPoint",
  "description": "",
  "id": "bpdts-api-tests;verify-get-method-response-for-users-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am an API user",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I access users enpoint",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I see users endpoint response succesful",
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsApiTests.i_am_an_API_user()"
});
formatter.result({
  "duration": 52094,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_access_users_enpoint()"
});
formatter.result({
  "duration": 35859,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_see_users_response_as()"
});
formatter.result({
  "duration": 76900488,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verify get method response for Users endPoint with userId",
  "description": "",
  "id": "bpdts-api-tests;verify-get-method-response-for-users-endpoint-with-userid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am an API user",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I access users enpoint with userId",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I see users endpoint with user id response succesful",
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsApiTests.i_am_an_API_user()"
});
formatter.result({
  "duration": 44589,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_access_users_enpoint_with_userId()"
});
formatter.result({
  "duration": 73494756,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_see_users_with_userId_response_as()"
});
formatter.result({
  "duration": 59629200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify get method json response for Users endPoint with userId",
  "description": "",
  "id": "bpdts-api-tests;verify-get-method-json-response-for-users-endpoint-with-userid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am an API user",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I access users enpoint with userId",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I see users endpoint json response is verified",
  "keyword": "Then "
});
formatter.match({
  "location": "BpdtsApiTests.i_am_an_API_user()"
});
formatter.result({
  "duration": 35750,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_access_users_enpoint_with_userId()"
});
formatter.result({
  "duration": 65070871,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_see_users_with_userId_jsonResponse_verified()"
});
formatter.result({
  "duration": 705076280,
  "status": "passed"
});
});