import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";
import singInPage from "../pages/singIn.page";
import logInPage from "../pages/logIn.page";


Given('I open practicesoftwaretesting.com', async () => {
    await homePage.openToolShop();
    await homePage.CheckHomePage();
});

Given('I am on the customer registration page', async () => {
    await homePage.clickOnSingIn();
    await logInPage.clickOnRegisterLink();
    await singInPage.checkSingInPage();
});

When('I fill the registration fields with valid credentials', async () => {
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
    await singInPage.fillPasswordField('Attask1#');
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
