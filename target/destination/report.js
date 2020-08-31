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
  "duration": 79227550,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_access_city_enpoint_with_London()"
});
formatter.result({
  "duration": 20674,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_see_response_as()"
});
formatter.result({
  "duration": 986432928,
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
  "duration": 27700,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_access_instructions_enpoint()"
});
formatter.result({
  "duration": 20773,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_see_instructions_response_as()"
});
formatter.result({
  "duration": 54755053,
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
  "duration": 25344,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_access_users_enpoint()"
});
formatter.result({
  "duration": 24482,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_see_users_response_as()"
});
formatter.result({
  "duration": 57894620,
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
  "duration": 55362,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_access_users_enpoint_with_userId()"
});
formatter.result({
  "duration": 23614,
  "status": "passed"
});
formatter.match({
  "location": "BpdtsApiTests.i_see_users_with_userId_response_as()"
});
formatter.result({
  "duration": 60539655,
  "status": "passed"
});
});