import homePage from "../pages/home.page";

describe('Test the Filter feature', async () =>{
    
    beforeEach(async () => {
        await homePage.openToolShop();
        await homePage.checkHomePage();
    })

    it('Should Filter by Category', async () => {
        await homePage.clickOnPowerTools();
        await homePage.checkPowerToolsFilter();
    })

    it('Should Filter by by Brand', async () => {
        await homePage.clickOnForgeflex();
        await homePage.checkForgeFlexFilter();
    })
})