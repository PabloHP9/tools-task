Feature: Search for exact product   

 Background:  

    Given I open the main page of practicesoftwaretesting.com again

 Scenario: Search exact existing product  

      When I fill the search bar with exact product "Combination Pliers"

      And I click on search

      Then I see the searched product "Combination Pliers"

Scenario: Search a non-existing product 

       When I fill the search bar with a non-existing product 

       And I click on search

      Then I see the message “There are no products found”