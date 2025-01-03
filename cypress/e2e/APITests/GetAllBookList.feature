Feature: Get All Book List

  Scenario: Successfully retrieve all books
    Given the API endpoint for get all book list is ready
    When the user sends a GET request to retrieve all books
    Then the res status should be 200
    And the response should contain a list of books