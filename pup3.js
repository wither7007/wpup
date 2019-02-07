const puppeteer = require("puppeteer")

(async function main() {
    try {
        const browser = await puppeteer.launch({
            headless: false
        })
        const page = await browser.newPage()
        await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A404 Safari/601.1')
        await page.goto("https://experts.shopify.com", {
            timeout: 0
        })
        await page.waitForSelector(".section")
        console.log("it's showing   ")
        const sections = await page.$$('.section')
        console.log(sections.length)
        for (const section of sections) {
            const button = await section.$('a.marketing-button')
            button.click()
        }
        await browser.close()
    } catch (e) {
        console.log('our error: ', e)
    }

})()