const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example_homepage.png' });
  await browser.close();
  console.log('Screenshot saved as example_homepage.png');
})();
