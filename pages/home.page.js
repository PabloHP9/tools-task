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

    get languageButton() {
        return $('//*[@id="language"]')
    }

    get languageMenu() {
        return $('//*[@id="dropdown-animated"]')
    }

    get languageEsItem() {
        return $('a[data-test="lang-es"]')
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

    async clickLanguageButton() {
        await this.languageButton.click();
    }

    async checkLanguageMenu() {
        await expect(this.languageMenu).toBeDisplayed();
    }

    async clickOnEsItem() {
        await this.languageEsItem.click();
    }

    async checkLanguageChange() {
         await expect(this.SingInLink).toHaveText('Iniciar sesión');
    }
 
    openToolShop() {
        return super.open('https://practicesoftwaretesting.com/');
    }

    checkHomePage() {
        return super.checkPage('Practice Software Testing - Toolshop - v5.0')
    }
}
export default new homePage();