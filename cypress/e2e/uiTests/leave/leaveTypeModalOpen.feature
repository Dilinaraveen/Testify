Feature: Add Leave Type Modal
  As an admin
  I want to open the "LeaveType" modal
  So that I can add a new leave type for employees

  Scenario: Successfully open the "LeaveType" modal when the "Add New" button is clicked
    Given the user is logged in and on the Leave Types page
    When the user clicks on "Add New"
    Then the "LeaveType" modal should open successfully
