Feature: Search for exact product   

 Background:  

    Given I open the main page of practicesoftwaretesting.com again

 Scenario: Search exact existing product  

      When I search exact product "Chisels Set"

      Then I see the searched product "Chisels Set"

Scenario: Search a non-existing product 

       When I search a non-existing product 

      Then I see the message “There are no products found”