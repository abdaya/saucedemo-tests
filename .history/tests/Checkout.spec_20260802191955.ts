import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';
import { InventoryPage } from '../pages/InventoryPage';
import { checkoutPage } from '../pages/checkoutPage';


test.beforeEach(async ({ page }) => {
    await login(page);
  await expect(page).toHaveURL(/inventory\.html/);
});



test('checkout page', async ({ page }) => {

    const My_inventoryPage = new InventoryPage(page)
    const My_checkoutPage = new checkoutPage(page)


    await My_inventoryPage.addBackpack()
    await My_inventoryPage.addOnesie()
    await My_inventoryPage.openCart()
    await My_inventoryPage.
    await My_checkoutPage.firstName()
    await My_checkoutPage.lastName()
    await My_checkoutPage.zipNumber()
   
    await expect(page.locator('#first-name')).toHaveValue('Abdellah')

    await expect(page.locator('#last-name')).toHaveValue('Amrhar')

    await expect(page.locator('#postal-code')).toHaveValue('11101')

  
    // await expect(my_CheckoutPage.PayInfo()).toContainText('SauceCard');
   
    // console.log(my_CheckoutPage.PayText)


});


    