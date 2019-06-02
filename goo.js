const puppeteer = require('puppeteer');
puppeteer.launch({
    headless: false
}).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    const title = await page.title()
    console.log(title)
    await browser.close();
});