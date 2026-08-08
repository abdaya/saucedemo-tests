import { loginPage } from './../pages/login';
import { test, expect } from '@playwright/test';
// import { login } from '../pages/login';
import { InventoryPage } from '../pages/InventoryPage';
import { checkoutPage } from '../pages/checkoutPage';
import { cartPage } from '../pages/cartPage';
import { loginPage } from '../pages/login';


test.beforeEach(async ({ page }) => {
    const login = new loginPage(page)
    const inventory = new InventoryPage(page)
    await login.goto();
    await login.userNamePassword()
    await checkout.
});



test('checkout page', async ({ page }) => {

    const inventory = new InventoryPage(page)
    const checkout = new checkoutPage(page)
    const cart = new cartPage(page)


    await inventory.addItem("sauce-labs-bolt-t-Shirt")
    await inventory.addOnesie()
    await inventory.openCart()
    await cart.startCheckout()
    await checkout.firstName()
    await checkout.lastName()
    await checkout.zipNumber()
   
    await expect(page.locator('#first-name')).toHaveValue('Abdellah')

    await expect(page.locator('#last-name')).toHaveValue('Amrhar')

    await expect(page.locator('#postal-code')).toHaveValue('11101')

  
    // await expect(my_CheckoutPage.PayInfo()).toContainText('SauceCard');
   
    // console.log(my_CheckoutPage.PayText)


});


    