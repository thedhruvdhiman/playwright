@SauceDemo
Feature: Inventory scenario

  Background:
    Given I login to the application with username standard_user and password secret_sauce

  @Inventory001
  Scenario: Verify inventory page
    When I change the filter from Price low to high
    Then I should see the inventory page with products sorted by Price low to high

  @Inventory002
  Scenario: Clicking on a product takes user to product page
    When I click on the first product
    Then I should be redirected to the product page


