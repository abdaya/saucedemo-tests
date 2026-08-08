import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('#use-name').fill('standard-user')
    await page.locator('#password').fill('secret_sauce')

    await expect(page.locator('#use-name')).toHaveText('standard-user')
    await expect(page.locator('#password')).toHaveText('secret_sauce')

    

  
});

