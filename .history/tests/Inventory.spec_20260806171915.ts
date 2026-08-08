import { test, expect } from '@playwright/test'
import { InventoryPage } from '../pages/InventoryPage.ts';
import {loginPage} from '../pages/loginPage.ts'
import { cartPage } from '../pages/cartPage.ts';

test.beforeEach(async ({ page }) => {
    const login = new loginPage(page)
    await login.goto();
    await login.userNamePassword();
});

test("add items", async({page}) => {
    const inventory = new InventoryPage(page);
    const cart = new cartPage(page)


    await inventory.addItem("test.allTheThings()-t-shirt-(red)")
    await inventory.addItem("Sauce Labs-bolt-t-Shirt")
    await expect(page.locator(".shopping_cart_badge")).toHaveText('2')
    
    // /* await inventory.openCart()
    // await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    // await cart.startCheckout()
    // awai */t expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')

})