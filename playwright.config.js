// playwright.config.js
const { devices } = require('@playwright/test')

module.exports = {
    // Configure projects for different browsers
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ],
    // Directory for test files
    testDir: './tests',
    // Global timeout for each test
    timeout: 180000,
    // Number of retries for a failed test
    retries: 1,
    // Output test results in HTML format
    reporter: 'html'
}
