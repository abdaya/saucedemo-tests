import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage.ts';


test("valid login", async ({ page }) => {

    const login = new loginPage(page)

    await login.goto()
    await login.userNamePassword('wrong','secret_sauce')
    await expect
    
})

// data-test="error-button


