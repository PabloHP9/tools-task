import { basePage } from "./base.page";
class homePage extends basePage {

    get SingInLink() {
        return $('a[href="/auth/login"]');
    }

    get accountOptionsmenu() {
        return $('#menu');
    }

    get singOutOption() {
        return $('a[data-test="nav-sign-out"]');
    }

    get languageButton() {
        return $('//*[@id="language"]');
    }

    get languageMenu() {
        return $('//*[@id="dropdown-animated"]');
    }

    get languageEsItem() {
        return $('a[data-test="lang-es"]');
    }

    get searchBar() {
        return $('//*[@id="search-query"]');
    }

    get searchButton() {
        return $('#filters button.btn-secondary');
    } 

    get noResultsMessage() {
        return $('app-overview > div:nth-child(3) > div.col-md-9 > div.container > div');
    }

    get chiselsProduct() {
        return $('img[alt="Chisels Set"]')
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

    async clickOnEsItem() {
        await this.languageEsItem.click();
    }


    async fillSearchBar(product) {
        await this.searchBar.addValue(product);
    }

    async clickOnSearch() {
        await this.searchButton.click();
    }

    async checkLanguageMenu() {
        await expect(this.languageMenu).toBeDisplayed();
    }

    async checkLanguageChange() {
         await expect(this.SingInLink).toHaveText('Iniciar sesión');
    }

    async checkNoResultMessage() {
        await expect(this.noResultsMessage).toHaveText('There are no products found.');
    }

    async checkToolResult() {
        await expect(this.chiselsProduct).toBeDisplayed();
    }

 
    openToolShop() {
        return super.open('https://practicesoftwaretesting.com/');
    }

    checkHomePage() {
        return super.checkPage('Practice Software Testing - Toolshop - v5.0')
    }
}
export default new homePage();