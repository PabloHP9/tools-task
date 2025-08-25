Feature: loging with an account  

 Background:  

      Given I open practicesoftwaretesting.com  

      And I am on the login page 

 Scenario: Sing in with existing account 

      When I fill the login fields with my account credentials  

      And I Click on login  

      Then I am redirected to my account page  

 Scenario: Sing in with non-existing account 

       When I fill the login fields with incorrect account credentials  

       And I Click on login  

      Then I see the error message “Invalid email or password”