Feature: Successful webpage load
  Scenario: Visit Google home page
    Given I open the google homepage
    When the page title should be google
    Then the google search button should be visible