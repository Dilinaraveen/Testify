Feature: Create a book
  Scenario: Successfully create a book
    Given the API endpoint is ready
    When the user send a POST request to create a book
    Then the response should contain the created book