import page from "./base.page";
import { expect } from "chai";
class homePage extends page {

    get sortingOptionAToZ() {
        return $('.form-select option[value="name,asc"]')
    }

    get sortingOptionZToA() {
        return $('.form-select option[value="name,desc"]')
    }

    get sortingOptionHighToLow() {
        return $('.form-select option[value="price,desc"]')
    }

    get sortingOptionLowToHigh() {
        return $('.form-select option[value="price,asc"]')
    }

    get adjustableWrenchProduct() {
        return $('img[alt="Adjustable Wrench"]')
    }

    get woodSawProduct() {
        return $('img[alt="Wood Saw"]')
    }

    get toolCabinetProduct() {
        return $('img[alt="Drawer Tool Cabinet"]')
    }

     get washersProduct() {
        return $('img[alt="Washers"]')
    }

    async clickOnSortAToZ() {
        await this.sortingOptionAToZ.click();
    }

    async clickOnSortZToA() {
        await this.sortingOptionZToA.click();
    }

     async clickOnSortHighToLow() {
        await this.sortingOptionHighToLow.click();
    }

     async clickOnSortLowToHigh() {
        await this.sortingOptionLowToHigh.click();
    }

    async checkSortAToZ() {
        await this.adjustableWrenchProduct.waitForDisplayed({ timeout: 5000 });
        
        const isDisplayed = await this.adjustableWrenchProduct.isDisplayed();
        expect(isDisplayed).to.be.true;
    }

     async checkSortZToA() {
        await this.woodSawProduct.waitForDisplayed({ timeout: 5000 });
        
        const isDisplayed = await this.woodSawProduct.isDisplayed();
        expect(isDisplayed).to.be.true;
    }

    async checkSortHighToLow() {
        await this.toolCabinetProduct.waitForDisplayed({ timeout: 5000 });
        
        const isDisplayed = await this.toolCabinetProduct.isDisplayed();
        expect(isDisplayed).to.be.true;
    }

    async checkSortLowToHigh() {
        await this.washersProduct.waitForDisplayed({ timeout: 5000 });
        
        const isDisplayed = await this.washersProduct.isDisplayed();
        expect(isDisplayed).to.be.true;
    }

    openToolShop() {
        return super.open('https://practicesoftwaretesting.com/');
    }

    checkHomePage() {
        return super.checkPage('Practice Software Testing - Toolshop - v5.0')
    }
}

export default new homePage();