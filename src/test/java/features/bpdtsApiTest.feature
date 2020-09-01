Feature: bpdts api tests
  Scenario: verify get method response for city endpoint
    Given I am an API user
    When I access city enpoint with London
    Then I see city end point response succesful

  Scenario: verify get method response for Instructions endPoint
    Given I am an API user
    When I access instructions enpoint
    Then I see instruction endpoint response succesful

  Scenario: verify get method response for Users endPoint
    Given I am an API user
    When I access users enpoint
    Then I see users endpoint response succesful

  Scenario: verify get method response for Users endPoint with userId
    Given I am an API user
    When I access users enpoint with userId
    Then I see users endpoint with user id response succesful

  Scenario: verify get method json response for Users endPoint with userId
    Given I am an API user
    When I access users enpoint with userId
    Then I see users endpoint json response is verified