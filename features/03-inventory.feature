@SauceDemo
Feature: Inventory scenario

  Background:
    Given I login to the application with username standard_user and password secret_sauce

  @Inventory001
  Scenario: Verify inventory page
    When I change the filter from Price low to high
    Then I should see the inventory page with products sorted by Price low to high
