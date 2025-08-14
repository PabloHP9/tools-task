import { basePage } from "./base.page";
class logInPage extends basePage {

    get registerLink() {
        return $('a[href="/auth/register"]')
    }

    async clickOnRegisterLink() {
        await this.registerLink.click();
    }

    checkLogInPage() {
        return super.CheckPage('Register - Practice Software Testing - Toolshop - v5.0')
    }

    checkLoginPageUrl() {
        return super.checkUrl('https://practicesoftwaretesting.com/auth/login')
    }

    


}
export default new logInPage(); 