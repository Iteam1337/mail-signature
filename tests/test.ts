import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Mail Signature');
});

test('index page has expected h2', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h2')).toBe('1. Enter your details');
});

test('office', async ({ page }) => {
	await page.goto('/');

	await page.selectOption('[aria-label="office"]', 'Göteborg');
	expect(await page.textContent('#other-office-memo')).toContain('Psst, du vet väl att vi finns i Stockholm också?');

	await page.selectOption('[aria-label="office"]', 'Stockholm');
	expect(await page.textContent('#other-office-memo')).toContain('Psst, du vet väl att vi finns i Göteborg också?');
});
