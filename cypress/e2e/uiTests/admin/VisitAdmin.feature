Feature: Successful admin page visit
  Scenario: User change directory to admin
    Given the user is on the dashboard page
    When the user click admin tab in side navigation bar
    Then the user should be redirected to the admin tab