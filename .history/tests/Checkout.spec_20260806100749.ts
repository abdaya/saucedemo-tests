import { test, expect } from '@playwright/test';
// import { login } from '../pages/login';
import { InventoryPage } from '../pages/InventoryPage';
import { checkoutPage } from '../pages/checkoutPage';


test.beforeEach(async ({ page }) => {
    // await login(page);
  await expect(page).toHaveURL(/inventory\.html/);
});



test('checkout page', async ({ page }) => {

    const inventory = new InventoryPage(page)
    const checkout = new checkoutPage(page)


    await inventory.addBackpack()
    await inventory.addOnesie()
    await inventory.openCart()
    await inventory.startCheckout()
    await checkoutPage.firstName()
    await My_checkoutPage.lastName()
    await My_checkoutPage.zipNumber()
   
    await expect(page.locator('#first-name')).toHaveValue('Abdellah')

    await expect(page.locator('#last-name')).toHaveValue('Amrhar')

    await expect(page.locator('#postal-code')).toHaveValue('11101')

  
    // await expect(my_CheckoutPage.PayInfo()).toContainText('SauceCard');
   
    // console.log(my_CheckoutPage.PayText)


});


    