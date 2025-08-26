import { basePage } from "./base.page";
class homePage extends basePage {

    get SingInLink() {
        return $('a[href="/auth/login"]')
    }

    get accountOptionsmenu() {
        return $('#menu');
    }

    get singOutOption() {
        return $('a[data-test="nav-sign-out"]')
    }

    async clickOnAccountOptions() {
        await this.accountOptionsmenu.click();
    }

    async clickOnSingIn() {
        await this.SingInLink.click();
    }
    
    async clickOnSingOut() {
        await this.singOutOption.click();
    }

    openToolShop() {
        return super.open('https://practicesoftwaretesting.com/');
    }

    checkHomePage() {
        return super.checkPage('Practice Software Testing - Toolshop - v5.0')
    }
}
export default new homePage();