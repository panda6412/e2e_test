// example.spec.js

// Import the Playwright test library
const { test, expect } = require('@playwright/test')

// test.describe.configure({ timeout: 30000 })

test('Navigate to Trend Micro staging', async ({ page }) => {
    page.on('request', (request) => console.log('>>', request.method(), request.url()))
    page.on('response', (response) => console.log('<<', response.status(), response.url()))

    await page.goto('https://google.com/', { timeout: 600000 })
    await expect(page).toHaveTitle(/Google/)
    await new Promise((resolve) => setTimeout(resolve, 60000))

    // Go to the specified URL
    await page.goto('https://stg.idprotect.trendmicro.com/', { timeout: 600000 })

    // Check if some expected text is present
    await expect(page).toHaveTitle(/Trend Micro ID Protection/)
})
