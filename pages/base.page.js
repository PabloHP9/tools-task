export class basePage {
     
    async open(path) {
        await browser.url(path);
    }

    async checkPage(title) {
        await expect(browser).toHaveTitle(title)
    }

    async checkUrl(url) {
        await expect(browser).toHaveUrl(url)
    }
}