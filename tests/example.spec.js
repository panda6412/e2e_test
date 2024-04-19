// Import the Playwright test library
const { test, expect } = require('@playwright/test')

// test.describe.configure({ timeout: 30000 })

test('Navigate to Trend Micro staging', async ({ page }) => {
    page.on('request', (request) => console.log('>>', request.method(), request.url()))
    page.on('response', (response) => console.log('<<', response.status(), response.url()))
    await new Promise((resolve) => setTimeout(resolve, 30000))

    test.slow()
    // Go to the specified URL
    await page.goto('https://stg.idprotect.trendmicro.com/', { timeout: 90000 })

    // Check if some expected text is present
    await expect(page).toHaveTitle(/Trend Micro ID Protection/)
})
