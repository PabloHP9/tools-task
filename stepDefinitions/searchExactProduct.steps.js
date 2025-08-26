import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";

Given('I open the main page of practicesoftwaretesting.com again', async () => {
    await homePage.openToolShop();
    await homePage.checkHomePage();
});

When('I search exact product "Chisels Set"', async () => {
    await homePage.fillSearchBar('Chisels Set');
    await homePage.clickOnSearch();
})

When('I search a non-existing product', async () => {
    await homePage.fillSearchBar('ps5');
     await homePage.clickOnSearch();
})


Then('I see the searched product "Chisels Set"', async () => {
    await homePage.checkToolResult();
})

Then('I see the message “There are no products found”', async () => {
    await homePage.checkNoResultMessage();
})