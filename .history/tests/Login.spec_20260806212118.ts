import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage.ts';


test("valid login", async ({ page }) => {

    const login = new loginPage(page)

    await login.goto()
    await login.userNamePassword('standard_user','secret_sauce')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page.locator('.title')).toHaveText('Products')
    
})

test("inValid login", async ({ page }) => {

    const login = new loginPage(page)

    await login.goto()
    await login.userNamePassword('wrong','sauce')
    await expect(page.locator('[data-test="error-button"]')).toBeVisible()
    await expect(page.getByRole)
    
})


