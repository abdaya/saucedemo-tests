import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')

    await expect(page.locator('#user-name')).toHaveValue('standard_user')
    await expect(page.locator('#password')).toHaveValue('secret_sauce')

    await page.locator('#login-button').click()
    await expect(page.getByRole('link'{})

  
});

