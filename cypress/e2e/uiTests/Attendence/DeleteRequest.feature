Feature: Functionality Delete User When Logged in as User
  Scenario: Send a Delete Request to Delete an Item as User
    Given User log in as the user
    When User send a Delete request to Delete
    Then the Response should be 403 Forbidden