import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";
import singInPage from "../pages/singIn.page";
import logInPage from "../pages/logIn.page";

Given('I open practicesoftwaretesting.com home page', async () => {
    await homePage.openToolShop();
    await homePage.CheckHomePage();
})

When('I register an account', async () => {
    await homePage.clickOnSingIn();
    await logInPage.clickOnRegisterLink();
    await singInPage.fillFirstNameField('22323');
    await singInPage.fillLastNameField('Doe');
    await singInPage.fillDateOfBirthField('2000-10-31');
    await singInPage.fillstreetField('reddor');
    await singInPage.fillPostalCodeField(333333);
    await singInPage.fillCityField('pisos picados');
    await singInPage.fillStateField('solid');
    await singInPage.fillCountryField();
    await singInPage.fillPhoneField(1234567890);
    await singInPage.fillemailField();
    await singInPage.fillPasswordField('Fornite22*');
    await singInPage.clickOnRegister();
    await logInPage.checkLoginPageUrl();
    await logInPage.clickHomeLink();
})

When('I sing out', async () => {
    await homePage.clickOnAccountOptions();
    await homePage.clickOnSingOut();

})

When('I go to login', async () => {
    await homePage.clickOnSingIn();
    await logInPage.checkLoginPageUrl();
})

When('I fill the login fields with my account credentials', async () => {
    await logInPage.fillLoginEmail();
    await logInPage.fillLoginPassword('Fornite22*');
})

When('I fill the login fields with incorrect account credentials', async () => {
    await logInPage.fillLoginEmail('Kevinwrong@email.com');
    await logInPage.fillLoginPassword('locura123*');
})

When('I Click on login', async () => {
    await logInPage.clickOnSubmit();
})

Then('I am redirected to my account page', async () => {
    await logInPage.checkMyAccountPageUrl();
})

Then('I see the error message “Invalid email or password”', async () => {
    await logInPage.checkLoginError();
})