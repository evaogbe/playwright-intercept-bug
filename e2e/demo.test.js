import { expect, test } from '@playwright/test';

test('can click nav link', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('heading', { level: 2 })).toHaveText('Home');

	await page.getByRole('link', { name: 'About' }).click();

	await expect(page.getByRole('heading', { level: 2 })).toHaveText('About');
});
