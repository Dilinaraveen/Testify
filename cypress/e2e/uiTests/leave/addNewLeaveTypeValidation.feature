Feature: Add New Leave Type Validation

  Scenario: User attempts to add a new leave type without filling in required fields
    Given the user is on the Leave Type page
    When the user clicks on the "Add New" button
    And the "LeaveType" modal opens
    And the user clicks on the "Save" button without entering any information
    Then the error message "Leave Name: is required" should be displayed