import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";
import logInPage from "../pages/logIn.page";

Given('I open practicesoftwaretesting.com', async () => {
    await homePage.openToolShop();
    await homePage.CheckHomePage();

});

Given('And I am on the login page', async () => {
    await homePage.clickOnSingIn();
    await logInPage.checkLoginPageUrl();
});

When('I fill the login fields with my account credentials', async () => {
    await logInPage.fillLoginEmail('gumball1@gmail.com');
    await logInPage.fillLoginPassword('Supremo*19');
})

When('I fill the login fields with incorrect account credentials', async () => {
    await logInPage.fillLoginEmail('Kevinwrong@email.com');
    await logInPage.fillLoginPassword('locura123*');
})

When('I Click on login', async () => {
    await logInPage.clickOnSubmit();
})

Then('Then I am redirected to my account page', async () => {
    await logInPage.checkMyAccountPageUrl();
})

Then('I see the error message “Invalid email or password”', async () => {
    await logInPage.checkLoginError();
})