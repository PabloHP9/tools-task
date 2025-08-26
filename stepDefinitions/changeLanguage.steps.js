import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";

Given('I open the home page of practicesoftwaretesting.com', async () => {
    await homePage.openToolShop();
    await homePage.checkHomePage();
})

When('I click on the language option', async () => {
    await homePage.clickLanguageButton();
    await homePage.checkLanguageMenu(); 
})

When('I click on the “ES” option', async () => {
    await homePage.clickOnEsItem();
})

Then('I see the "Sing in" link as "iniciar sesión"', async () => {
    await homePage.checkLanguageChange();
})
