import { basePage } from "./base.page";
class homePage extends basePage {

    get SingInLink() {
        return $('a[href="/auth/login"]')
    }

    async clickOnSingIn() {
        await this.SingInLink.click();
    }

    openToolShop() {
        return super.open('https://practicesoftwaretesting.com/');
    }

    CheckHomePage() {
        return super.CheckPage('Practice Software Testing - Toolshop - v5.0')
    }
}
export default new homePage();