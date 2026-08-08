import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {

await page.locator('#user-name').fill('standard_user')




});