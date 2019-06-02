const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:8080/#!', {
        timeout: 0
    });

    await page.setViewport({
        width: 1920,
        height: 1080
    });
    await page.click('#search')
    await page.keyboard.type('meals')
    await page.waitFor(2 * 1000);
    await page.screenshot({
        path: 'full.png',
        fullPage: false
    })
    const searchValue = await page.$eval('#search', el => el.value);
    console.log(searchValue)
    console.log(await page.title())
    await browser.close()
})()