# This feature ensures the system validates required fields when adding a new course.

Feature: Add New Course Validation

  # Scenario: Validation for missing required fields while adding a course
  # This scenario tests if the system displays an appropriate error message
  # when a user attempts to save a course without providing the necessary information.

  Scenario: User attempts to add a new course without filling in required fields
    # Given: The user navigates to the Training page
    Given the user is on the Training page

    # When: The user clicks on the "Add New" button to open the modal for adding a course
    When the user clicks on the "Add New" button

    # And: The "Courses" modal should appear
    And the "Courses" modal opens

    # And: The user attempts to save without entering any course details
    And the user clicks on the "Save" button without entering any information

    # Then: An error message should notify the user that required fields are missing
    Then the error message "This field is required" should be displayed
