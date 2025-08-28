import homePage from "../pages/home.page";

describe('test the Sort feature', async () =>{
    
    beforeEach(async () => {
        await homePage.openToolShop();
        await homePage.checkHomePage();
    })

    it('Should Sort by Name(A-Z)', async () => {
        await homePage.clickOnSortAToZ();
        await homePage.checkSortAToZ();
    })

    it('Should Sort by Name(Z-A)', async () => {
        await homePage.clickOnSortZToA();
        await homePage.checkSortZToA();
    })

     it('Should Sort by Price(High-Low)', async () => {
        await homePage.clickOnSortHighToLow();
        await homePage.checkSortHighToLow();
    })

    it('Should Sort by Price(Low-High)', async () => {
        await homePage.clickOnSortLowToHigh();
        await homePage.checkSortLowToHigh();
    })
})