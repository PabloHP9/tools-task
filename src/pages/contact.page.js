import page from "./base.page";
import { expect } from "chai";

class contactPage extends page {

    get firstNameField() {
        return $('#first_name')
    }

    get lastNameField() {
        return $('#last_name')
    }

    get messageField() {
        return $('#message')
    }


     get emailAddressField() {
        return $('#email')
    }

    get customerServiceSubject() {
        return $('.form-select option[value="customer-service"]')
    }

    get contactMessage() {
        return $('.alert')
    }

    get noMessageError() {
        return $('#message_alert')
    }

    get submitButton() {
        return $('.btnSubmit')
    }
    
    async fillFirstNameField(name) {
        await this.firstNameField.addValue(name)
    }

    async fillLastNameField(lastName) {
        await this.lastNameField.addValue(lastName);
    }
    
    async fillemailField(email) {
        await this.emailAddressField.addValue(email);
    }

    async filltextfield() {
        await this.messageField.addValue('Xz9LqpWmT4CvYRk8JhNsAoG2BdVtPfEuKi7ZxQHg3Mw!');
    }

    async clickOnCustomerService() {
        await this.customerServiceSubject.click();
    }

    async clickOnSend() {
        await this.submitButton.click();
    }

    async checkContactMessage() {
            await this.contactMessage.waitForDisplayed({ timeout: 5000 });
            
            const isDisplayed = await this.contactMessage.isDisplayed();
            expect(isDisplayed).to.be.true;
        }

        async checkNoMessageError() {
            await this.noMessageError.waitForDisplayed({ timeout: 5000 });
            
            const isDisplayed = await this.noMessageError.isDisplayed();
            expect(isDisplayed).to.be.true;
        }
}


export default new contactPage();