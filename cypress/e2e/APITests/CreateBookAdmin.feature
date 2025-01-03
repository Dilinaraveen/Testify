Feature: Create a book
  Scenario: Admin successfully create a book
    Given the API endpoint is ready
    When the admin sends a POST request to create a book
    Then the response should contain the created book

  Scenario: Admin attempt to create the same book again
    Given the API endpoint is ready
    When the admin sends a POST request to create a book
    And the admin tries to create the same book again
    Then the response should indicate the book already exists

  Scenario: Admin attempt to create a book without request body
    Given the API endpoint is ready
    When the admin sends a POST request without request body to create a book
    Then the response should be a bad request

   Scenario: Admin attempt to create a book without mandatory title field
     Given the API endpoint is ready
     When the admin sends a POST request without title to create a book
     Then the response should be bad request

  Scenario: Admin attempt to create a book without mandatory author field
    Given the API endpoint is ready
    When the admin sends a POST request without author to create a book
    Then the response should be bad request

  Scenario: Admin Attempt to create a book with numeric value for author
    Given the API endpoint is ready
    When the admin sends a POST request with author as numeric value
    Then the response should be bad request