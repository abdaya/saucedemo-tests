import { test, expect } from '@playwright/test'
import { InventoryPage } from '../pages/InventoryPage.ts';
import {login} from '../helpers/login.ts'

test.beforeEach(async ({ page }) => {
    await login(page);
});

test("add items", async({page}) => {
    const addInventory = new InventoryPage(page);


    await addInventory.addBackpack()
    await addInventory.addOnesie()
    await expect(page.locator(".shopping_cart_badge")).toHaveText('2')
    await addInventory.openCart()
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await addInventory.startCheckout()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')

})