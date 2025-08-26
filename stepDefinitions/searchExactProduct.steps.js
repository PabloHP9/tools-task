import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";

Given('I open the main page of practicesoftwaretesting.com again', async () => {
    await homePage.openToolShop();
    await homePage.checkHomePage();
});

When('I fill the search bar with exact product "Combination Pliers"', async () => {
    await homePage.fillSearchBar('Cfsdfsdfgedgdsgdgsdg')
})

When('I fill the search bar with a non-existing product', async () => {
    await homePage.fillSearchBar('ps5')
})

When('I click on search', async () => {
    await homePage.clickOnSearch();
})

Then('I see the searched product "Combination Pliers"', async () => {
    await homePage.checkToolResult();
})

Then('I see the message “There are no products found”', async () => {
    await homePage.checkNoResultMessage();
})