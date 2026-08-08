import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';
import { InventoryPage } from '../pages/InventoryPage';
import { checkoutPage } from '../pages/checkoutPage';
'



test.beforeEach(async ({ page }) => {
  // Open SauceDemo and log in before each test.
    await login(page);
      // Confirm that login succeeded.
  await expect(page).toHaveURL(/inventory\.html/);
});

test('invrntory page', async{(page)} =>)
const My_inventoryPage = new InventoryPage(page)

 


test('checkout page', async ({ page }) => {

    const my_CheckoutPage = new checkoutPage(page)

    await expect(page.locator('#first-name')).toHaveValue('Abdellah')

    await expect(page.locator('#last-name')).toHaveValue('Amrhar')

    await expect(page.locator('#postal-code')).toHaveValue('11101')

  
    await expect(my_CheckoutPage.PayInfo()).toContainText('SauceCard');
   
    console.log(my_CheckoutPage.PayText)


});


    