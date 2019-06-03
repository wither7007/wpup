const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox'],
    userDataDir: `${__dirname}/profile-dir`,
  });
  const page = await browser.newPage();

  var requests = [
    'http://www.example.com/',
    'http://www.example.org/',
    'https://www.google.com/',
    'https://www.startribune.com'
  ];

  for (var i = 0; i < requests.length; i++) {
    console.time(requests[i]);
    await page.goto(requests[i], {
      waitUntil: 'load',
    });
    console.timeEnd(requests[i]);
  }

  await browser.close();
})();
