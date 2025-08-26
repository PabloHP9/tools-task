import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";
import singInPage from "../pages/singIn.page";
import logInPage from "../pages/logIn.page";
import user from "../data/user.json";

Given('I open practicesoftwaretesting.com home page', async () => {
    await homePage.openToolShop();
    await homePage.checkHomePage();
})

When('I register an account', async () => {
    await homePage.clickOnSingIn();
    await logInPage.clickOnRegisterLink();
    await singInPage.fillFirstNameField(user.name1);
    await singInPage.fillLastNameField(user.lastName1);
    await singInPage.fillDateOfBirthField(user.dateOfBirth1);
    await singInPage.fillstreetField(user.street2);
    await singInPage.fillPostalCodeField(user.postalCode1);
    await singInPage.fillCityField(user.city1);
    await singInPage.fillStateField(user.state1);
    await singInPage.fillCountryField();
    await singInPage.fillPhoneField(user.phone1);
    await singInPage.fillemailField();
    await singInPage.fillPasswordField(user.password1);
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
    await logInPage.fillLoginPassword(user.password1);
})

When('I fill the login fields with incorrect account credentials', async () => {
    await logInPage.fillLoginEmail('Kevinwrong@email.com');
    await logInPage.fillLoginPassword(user.password2);
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