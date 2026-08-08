import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { checkoutPage } from '../pages/checkoutPage';
import { cartPage } from '../pages/cartPage';
import { loginPage } from '../pages/loginPage';


test.beforeEach(async ({ page }) => {
    const login = new loginPage(page)
    const inventory = new InventoryPage(page)
    await login.goto();
    await login.userNamePassword('standard_user','secret_sauce')
    await inventory.addItem("test.allthethings()-t-shirt-(red)")
    await inventory.addItem("sauce-labs-bike-light")
    await inventory.openCart()

});



test('valid checkout page', async ({ page }) => {

    const inventory = new InventoryPage(page)
    const checkout = new checkoutPage(page)
    const cart = new cartPage(page)
    const login = new loginPage(page)

    await cart.startCheckout()
    await checkout.cardInfo('Abdellah','Amrhar','11101')
    await expect(page.locator('#first-name')).toHaveValue('Abdellah')
    await expect(page.locator('#last-name')).toHaveValue('Amrhar')
    await expect(page.locator('#postal-code')).toHaveValue('11101')
    await checkout.Continue()
    await expect(checkout.PayInfo()).toContainText('SauceCard');
    console.log(await checkout.PayText())


});

test('inValid checkout page', async ({ page }) => {

    const inventory = new InventoryPage(page)
    const checkout = new checkoutPage(page)
    const cart = new cartPage(page)
    const login = new loginPage(page)

    await cart.startCheckout()
    await checkout.cardInfo('Abdellah','','11101')
   
    await checkout.Continue()
    await expect();
   

// data-test="error
});

    