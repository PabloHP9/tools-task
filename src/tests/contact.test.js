import contactPage from "../pages/contact.page";
import homePage from "../pages/home.page";

describe('Test the Filter feature', async () =>{
    
    beforeEach(async () => {
        await homePage.openToolShop();
        await homePage.checkHomePage();
        await homePage.clickOnContact();
    })

    it('Should make a contact using proper credentials', async () => {
        await contactPage.fillFirstNameField('John')
        await contactPage.fillLastNameField('Doe')
        await contactPage.fillemailField('ramdom@gmail.com');
        await contactPage.clickOnCustomerService
        await contactPage.filltextfield();
        await contactPage.clickOnSend();
        await contactPage.checkContactMessage();
        
    })

    it('Should Filter by by Brand', async () => {
        await contactPage.fillFirstNameField('John')
        await contactPage.fillLastNameField('Doe')
        await contactPage.fillemailField('ramdom@gmail.com');
        await contactPage.clickOnCustomerService();
        await contactPage.clickOnSend();
        await contactPage.checkNoMessageError();
    })
})