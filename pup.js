/**
 * @name emulate devices
 *
 * @desc Use the built in devices descriptors to emulate an Iphone 6. These are actually shortcuts for calling
 * page.setUserAgent() and page.setViewPort().
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageemulateoptions}
 */
const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.emulate(devices['iPhone 6'])
    await page.goto('https://washingtonpost.com', {
        timeout: 0
    });
    await page.screenshot({
        path: 'full.png',
        fullPage: false
    })
    await page.goto('https://slate.com', {
        timeout: 0
    });
    await page.screenshot({
        path: 'full2.png',
        fullPage: false
    })
    console.log(await page.title())
    await browser.close()
})()