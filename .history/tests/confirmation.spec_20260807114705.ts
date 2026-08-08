import { cart } from './../.history/pages/cartPage_20260806095642';
import { test, expect } from "@playwright/test";
import { InventoryPage } from '../pages/InventoryPage.ts';
import {loginPage} from '../pages/loginPage.ts'
import { cartPage } from '../pages/cartPage.ts';
import { confirmationPage } from "../pages/confirmationPage";


test.beforeEach(async ({ page }) => {
    const login = new loginPage(page)
    const inventory = new InventoryPage(page)
    const cart - new cartPage()
    await login.goto();
    await login.userNamePassword('standard_user','secret_sauce')
    await inventory.addItem("test.allthethings()-t-shirt-(red)")
    await inventory.addItem("sauce-labs-bike-light")
    await inventory.openCart()


});

test("complete order", async ({ page }) =>
{
    await page.getByRole('button', { name: 'back-to-products' }).click()
    
});