Feature: Sing up a new account 
   
   Background:
    Given I open practicesoftwaretesting.com
    And I am on the customer registration page
   
   Scenario: Sing up with valid credentials
    When I fill the registration fields with valid credentials
    And I Click on register
    Then I am redirected to login page

   Scenario: Sing up with invalid credentials
    When I fill the phone field with letters
    And I Click on register 
    Then I see the error message “Only numbers are allowed.” 
