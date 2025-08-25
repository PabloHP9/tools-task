import { basePage } from "./base.page";
import sharedData from "../sharedData";
class logInPage extends basePage {

    get registerLink() {
        return $('a[href="/auth/register"]');
    }

    get emailAddressField() {
        return $('#email');
    }

    get passwordField() {
        return $('#password');
    }

    get submitButton() {
        return $('.btnSubmit');
    }

    get loginErrorMessage() {
        return $('.help-block');
    }

    get homeLink() {
        return $('a[data-test="nav-home"]')
    }

    async fillLoginEmail() {
         const email = sharedData.getGeneratedEmail();
        await this.emailAddressField.addValue(email);
    }

    async fillLoginPassword(loginPassword) {
        await this.passwordField.addValue(loginPassword);
    }

    async clickOnRegisterLink() {
        await this.registerLink.click();
    }

    async clickOnSubmit() {
        await this.submitButton.click();
    }
    
    async clickHomeLink() {
        await this.homeLink.click();
    }

    async checkLoginError() {
        await expect(this.loginErrorMessage).toBeDisplayed();
    }

    openLogin() {
        return super.open('https://practicesoftwaretesting.com/auth/login');
    }

    checkLogInPage() {
        return super.CheckPage('Register - Practice Software Testing - Toolshop - v5.0');
    }

    checkLoginPageUrl() {
        return super.checkUrl('https://practicesoftwaretesting.com/auth/login');
    }
    checkMyAccountPageUrl() {
        return super.checkUrl('https://practicesoftwaretesting.com/account');
    }

    


}
export default new logInPage(); 