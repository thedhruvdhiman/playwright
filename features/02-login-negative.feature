Feature: Negative login scenario

  @Login002
  Scenario: Invalid login
    Given I launch the application
    When I enter incorrect credentials
    Then I should see error message
