import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';
import { InventoryPage } from '../pages/InventoryPage';
import { checkoutPage } from '../pages/checkoutPage';



test.beforeEach(async ({ page }) => {
  // Open SauceDemo and log in before each test.
    await login(page);
      // Confirm that login succeeded.
  await expect(page).toHaveURL(/inventory\.html/);
});


test('checkout page', async ({ page }) => {

    const My_ckeckoutPage = new checkoutPage(page)

    await expect(page.locator('#first-name')).toHaveValue('Abdellah')

    await expect(page.locator('#last-name')).toHaveValue('Amrhar')

    await expect(page.locator('#postal-code')).toHaveValue('11101')
    await page.locator('#continue').click()
    const paymentInfo = page.locator(
  '[data-test="payment-info-value"]'
);
    await expect(paymentInfo).toContainText('SauceCard');
   
    console.log(paymentText)

});


    