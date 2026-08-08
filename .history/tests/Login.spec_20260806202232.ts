import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage.ts';


test("valid login", async ({ page }) => {

    const login = new loginPage(page)

    await login.goto()
    await login.userNamePassword('wrong','secret_sauce')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page.locator('.title')).toHaveText('Products')
    
})

// data-test="error-button


