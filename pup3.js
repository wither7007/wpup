/**
 * @name emulate devices
 *
 * @desc Use the built in devices descriptors to emulate an Iphone 6. These are actually shortcuts for calling
 * page.setUserAgent() and page.setViewPort().
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageemulateoptions}
 */
const puppeteer = require("puppeteer")
const devices = require("puppeteer/DeviceDescriptors")

;
(async () => {
    const browser = await puppeteer.launch({
        headless: true
    })
    const page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A404 Safari/601.1')

    //   await page.emulate(devices["iPhone 6"])
    await page.goto("https://experts.shopify.com", {
        timeout: 0
    })
    await page.waitForSelector(".section")
    console.log("it's showing   ")
    const sections = await page.$$('.section')
    console.log(sections.length)
    await browser.close()
})()