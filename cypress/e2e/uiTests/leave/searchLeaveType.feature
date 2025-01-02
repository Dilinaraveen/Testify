Feature: Search Leave Type
  As an admin
  I want to search for a leave type by name
  So that I can see only the relevant leave type in the data table

  Scenario: Search for "Annual Leave" in the search bar
    Given the user is logged in and on the Leave Types page
    When the user enters "Annual leave" in the search bar
    And the user clicks the "Search" button
    Then the data table should only show rows with "Annual leave"
