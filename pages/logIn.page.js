import { basePage } from "./base.page";
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
        return $('.btnSubmit')
    }

    get loginErrorMessage() {
        return $('.help-block')
    }

    async fillLoginEmail(loginEmail) {
        await this.emailAddressField.addValue(loginEmail);
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

    async checkLoginError() {
        await expect(this.loginErrorMessage).toBeDisplayed();
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