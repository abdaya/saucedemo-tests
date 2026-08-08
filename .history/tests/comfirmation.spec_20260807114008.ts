import { test, expect } from "@playwright/test";
import { InventoryPage } from '../pages/InventoryPage.ts';
import {loginPage} from '../pages/loginPage.ts'
import { cartPage } from '../pages/cartPage.ts';
import { confirmationPage } from "../pages/comfirmationPage";


test.beforeEach(async({ page }) => {
    const login = new loginPage(page)
        await login.goto();
        await login.userNamePassword('standard_user','secret_sauce');
});

test("complete order", async ({ page }) =>
{
    await page.getByRole('button', { name: 'back-to-products' }).click()
    
});