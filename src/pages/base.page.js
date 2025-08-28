export default class page {

    async open(path) {
        await browser.url(path);
    }
    
    async checkPage(pageTitle) {
        await expect(browser).toHaveTitle(pageTitle);
    }

    async checkUrl(url) {
        await expect(browser).toHaveUrl(url);
    }
}