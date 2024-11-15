import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},

	testDir: 'e2e',

	projects: [
		{
			name: 'chromium',
			use: devices['Desktop Chrome']
		},

		{
			name: 'firefox',
			use: devices['Desktop Firefox']
		},

		{
			name: 'webkit',
			use: devices['Desktop Safari']
		},
		{
			name: 'Mobile Chrome',
			use: devices['Pixel 5']
		},
		{
			name: 'Mobile Safari',
			use: devices['iPhone 12']
		}
	]
});
