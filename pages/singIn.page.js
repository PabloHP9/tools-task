import { basePage } from "./base.page"
import { generateRandomEmail } from "../utils/emailGenerator"
import sharedData from "../utils/sharedData"
class singInPage extends basePage {
    get firstNameField() {
        return $('#first_name')
    }

    get lastNameField() {
        return $('#last_name')
    }

    get dateOfBirthField() {
        return $('#dob')
    }

    get streetField() {
        return $('#street')
    }

    get postalCodeField() {
        return $('#postal_code')
    }

    get cityField() {
        return $('#city')
    }

    get stateField() {
        return $('#state')
    }

    get contryField() {
        return $('#country > option:nth-child(2)')
    }

    get phoneField() {
        return $('#phone')
    }

    get emailAddressField() {
        return $('#email')
    }

    get passwordField() {
        return $('#password')
    }

    get submitButton() {
        return $('.btnSubmit')
    }

    get phoneFieldError() {
        return $('[data-test="phone-error"]')
    }

    async fillFirstNameField(name) {
        await this.firstNameField.addValue(name)
    }

    async fillLastNameField(lastName) {
        await this.lastNameField.addValue(lastName);
    }

    async fillDateOfBirthField(date) {
        await this.dateOfBirthField.addValue(date);
    }

    async fillstreetField(street) {
        await this.streetField.addValue(street);
    }

    async fillPostalCodeField(postalCode) {
        await this.postalCodeField.addValue(postalCode);
    }

    async fillCityField(city) {
        await this.cityField.addValue(city);
    }

    async fillStateField(state) {
        await this.stateField.addValue(state);
    }

    async fillCountryField(country) {
        await this.contryField.click();
    }

    async fillPhoneField(phone) {
        await this.phoneField.addValue(phone);
    }

    async fillemailField() {
        const email = generateRandomEmail();
        sharedData.setGeneratedEmail(email);
        await this.emailAddressField.addValue(email);
    }

     async fillEmailForLogin(email) {
        await this.emailAddressField.addValue(email);
    }

    async fillPasswordField(password) {
        await this.passwordField.addValue(password);
    }

    async clickOnRegister() {
        await this.submitButton.click();
    }

    async checkPhoneFieldError() {
        await expect(this.phoneFieldError).toBeDisplayed();
    }

    openRegister() {
        return super.open('https://practicesoftwaretesting.com/auth/register');
    }

    checkSingInPage() {
        return super.checkPage('Register - Practice Software Testing - Toolshop - v5.0')
    }
}

export default new singInPage();