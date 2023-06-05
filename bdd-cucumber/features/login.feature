Feature: The Zero WebApp Security site

  Scenario Outline: As a user, I can cannot login with invalid credentials

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an error message

    Examples:
      | username | password             |
      | tomsmith | SuperSecretPassword! |
      | foobar   | barfoo               |
  
  Scenario: Single Login Attempt

    Given I am on the login page
    When I login with invalid credentials
    Then I should see an error message
