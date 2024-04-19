// Import the Playwright test library
const { test, expect } = require('@playwright/test')

// test.describe.configure({ timeout: 30000 })

test('Navigate to Trend Micro staging', async ({ page }) => {
    page.on('request', (request) => console.log('>>', request.method(), request.url()))
    page.on('response', (response) => console.log('<<', response.status(), response.url()))

    // Go to the specified URL
    await page.goto('https://stg.idprotect.trendmicro.com/', { timeout: 600000 })

    // Check if some expected text is present
    await expect(page).toHaveTitle(/Trend Micro ID Protection/)
})
