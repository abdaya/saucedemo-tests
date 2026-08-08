import { comfirmationPage } from './../.history/pages/comfirmationPage_20260807093437';
import { cart } from './../.history/pages/cartPage_20260806095642';
import { test, expect } from "@playwright/test";
import { InventoryPage } from '../pages/InventoryPage.ts';
import {loginPage} from '../pages/loginPage.ts'
import { cartPage } from '../pages/cartPage.ts';
import { confirmationPage } from "../pages/confirmationPage";
import { checkoutPage } from '../pages/checkoutPage.ts';


test.beforeEach(async ({ page }) => {
    const login = new loginPage(page)
    const inventory = new InventoryPage(page)
    const cart = new cartPage(page)
    const checkout = new checkoutPage(page)

    await login.goto();
    await login.userNamePassword('standard_user','secret_sauce')
    await inventory.addItem("test.allthethings()-t-shirt-(red)")
    await inventory.addItem("sauce-labs-bike-light")
    await inventory.openCart()
    cart.startCheckout()
    await checkout.cardInfo('Abdellah', 'Amrhar', '11101')
    checkout.Continue()
});

test("complete order", async ({ page }) =>
{
    const confirmation = new confirmationPage(page)
    await confirmation.finishOrder()
    // 
    await page.locator('[name=back-to-products]').click()
});
