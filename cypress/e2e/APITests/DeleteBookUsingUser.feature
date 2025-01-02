Feature: Delete a book
  Scenario: Delete a book using User login
    Given the User is logged in and the API endpoint is ready
    When the user sends a Delete request to Delete a book
    Then the response staus code should be 403
