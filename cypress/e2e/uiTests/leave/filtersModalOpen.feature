Feature: Filter Leave Types
  As an admin
  I want to verify the "Filter" modal opens
  So that I can filter the leave types

  Scenario: Open the "Filter" modal and verify its header
    Given the user is logged in and on the Leave Types page
    When the user clicks on the "Filters" button
    Then the "Filter" modal should open
    And the modal header should be "Leave Types"
