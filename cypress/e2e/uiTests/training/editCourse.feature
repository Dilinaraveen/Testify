Feature: Edit Course

  Scenario: User selects the first course and opens the edit modal
    Given the user is on the Training page
    When the user clicks the "Edit" button in the first row
    Then the "Edit Course" modal should be visible
      And the user appends " Edited" to the existing course name in the course name field
    And the user clicks the "Save" button
    Then the course name should be updated with " Edited" appended to the existing name