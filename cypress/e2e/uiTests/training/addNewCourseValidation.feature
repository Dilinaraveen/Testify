Feature: Add New Course Validation

  Scenario: User attempts to add a new course without filling in required fields
    Given the user is on the Training page
    When the user clicks on the Add New button
    And the courses modal opens
    And the user clicks on the save button without entering any information
    Then the error message "This field is required" should be displayed

