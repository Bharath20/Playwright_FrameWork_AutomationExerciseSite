import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './src/test',

  timeout: 30 * 1000,

  fullyParallel: false,

  retries: 2,   // Retry enable

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }]
  ],

  use: {
    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]

});