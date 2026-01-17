@SauceDemo
Feature: This feature is going to check the login functionality

  Background:
    Given I login to the application with username standard_user and password secret_sauce

  @Login001
  Scenario: Valid login
    Given I should be redirected to the investory page
    Then I should see products on the screen
