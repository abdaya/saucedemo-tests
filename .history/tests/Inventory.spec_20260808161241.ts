import { test, expect } from '@playwright/test'
import { InventoryPage } from '../pages/InventoryPage.ts';
import {loginPage} from '../pages/loginPage.ts'
import { cartPage } from '../pages/cartPage.ts';

test.beforeEach(async ({ page }) => {
    const login = new loginPage(page)
    await login.goto();
    await login.userNamePassword('standard_user', 'secret_sauce');
    
});

test("add items", async({page}) => {
    const inventory = new InventoryPage(page);


    await inventory.sortItems()


    await inventory.addItem("test.allthethings()-t-shirt-(red)")
    await inventory.addItem("sauce-labs-bolt-t-shirt")
    await expect(page.locator(".shopping_cart_badge")).toHaveText('2')
    await inventory.openCart() 

})