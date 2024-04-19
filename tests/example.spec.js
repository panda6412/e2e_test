// Import the Playwright test library
const { test, expect } = require('@playwright/test');

test('Navigate to Trend Micro staging', async ({ page }) => {
    // Go to the specified URL
    await page.goto('https://stg.idprotect.trendmicro.com/');
    
    // Check if some expected text is present
    await expect(page).toHaveTitle(/Trend Micro ID Protection/);
});
