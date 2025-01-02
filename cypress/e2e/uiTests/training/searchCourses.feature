Feature: Search for courses

  Scenario: User searches for "Info Marketing" courses
    Given the user is on the Training page
    When the user enters "Info Marketing" into the search field
    And clicks the Search button
    Then the search results should display "Info Marketing"
