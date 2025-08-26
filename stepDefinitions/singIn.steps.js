import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";
import singInPage from "../pages/singIn.page";
import logInPage from "../pages/logIn.page";
import user from "../data/user.json"


Given('I open practicesoftwaretesting.com', async () => {
    await homePage.openToolShop();
    await homePage.checkHomePage();
});

Given('I am on the customer registration page', async () => {
    await homePage.clickOnSingIn();
    await logInPage.clickOnRegisterLink();
    await singInPage.checkSingInPage();
});

When('I fill the registration fields with valid credentials', async () => {
    await singInPage.fillFirstNameField(user.name1);
    await singInPage.fillLastNameField(user.lastName1);
    await singInPage.fillDateOfBirthField(user.dateOfBirth1);
    await singInPage.fillstreetField(user.street1);
    await singInPage.fillPostalCodeField(user.postalCode1);
    await singInPage.fillCityField(user.city1);
    await singInPage.fillStateField(user.state1);
    await singInPage.fillCountryField();
    await singInPage.fillPhoneField(user.phone1);
    await singInPage.fillemailField();
    await singInPage.fillPasswordField(user.password1);
});

When('I fill the phone field with letters', async () => {
    await singInPage.fillPhoneField('pablo');
});

When('I Click on register', async () => {
    await singInPage.clickOnRegister();
});

Then('I am redirected to login page', async () => {
    await logInPage.checkLoginPageUrl();
});

Then('I see the error message “Only numbers are allowed.”', async () => {
    await singInPage.checkPhoneFieldError();
    

});
