Feature: This feature is going to check the login functionality
As a user I should be able to login to the application

  @test
  Scenario Outline: Valid login
    Given I login to the application with username <username> and password <password>
    # When I enter valid credentials
    # And I click the login button
    # Then I should be redirected to the dashboard
    # And I should see a welcome message

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
