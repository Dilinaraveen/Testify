Feature: Expenses functionality

  Scenario: User create a new expense type
    Given the user is on expense page
    When the user create a new expense type
    Then it will be shown in expense table

  Scenario: User edit newly created expense type
    Given the user is on expense page
    When the user edit the expense type
    Then the changes will be shown in table

  Scenario: User delete newly created expense type
    Given the user is on expense page
    When the user delete the expense type
    Then the newly created record will not be available in table

  Scenario: User filter records by expense type
    Given the user is on expense page
    When the user search the expense type
    Then it only visible in table