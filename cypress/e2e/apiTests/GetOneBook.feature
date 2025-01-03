Feature: Get a Book
    Scenario: Successfully retrieve a book by ID as Admin
        Given the API endpoint is ready logged in as Admin
        When the admin sends a GET request to retrieve a book 
        Then the response should contain the details of the requested book with status code 200
      
    Scenario: Successfully retrieve a book by ID as User
        Given the API endpoint is ready logged in as User
        When the user sends a GET request to retrieve a book
        Then the response should contain the details of the requested book with status code 200
      
