import { test, expect } from "@playwright/test";

test.beforeEach(async({ page }) => {
    const login = new loginPage(page)
        await login.goto();
        await login.userNamePassword('standard_user','secret_sauce');
});

test("complete order", async ({ page }) =>
{
    await page.getByRole('button', { name: 'back-to-products' }).click()
    
});