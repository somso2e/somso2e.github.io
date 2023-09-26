const puppeteer = require('puppeteer');
const path = require('path');
(async () => {

  // Create a browser instance
  const browser = await puppeteer.launch({
    args: ['--font-render-hinting=none'],
    headless: "new",
  });
  // Create a new page
  const page = await browser.newPage();

  // Website URL to export as pdf
  // const website_url = page.goto(`file:${path.join(__dirname, '../_pages/cv.html')}`);
  // Open URL in current page
  await page.goto(`file:${path.join(__dirname, '../_pages/cv.html')}`); 

  //To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');
  await page.evaluate(() => document.body.style.zoom = 0.80);
// Downlaod the PDF
  const pdf = await page.pdf({
    path: '../files/Sepand_Soltani_cv.pdf',
    margin: { top: '50px', right: '20px', bottom: '50px', left: '20px' },
    printBackground: true,
    format: 'A4',
  });

  // Close the browser instance
  await browser.close();
})();
