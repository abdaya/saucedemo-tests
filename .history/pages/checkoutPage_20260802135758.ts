import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';
import { InventoryPage } from './InventoryPage';


test.beforeEach(async ({ page }) => {
  // Open SauceDemo and log in before each test.
    await login(page);

      // Confirm that login succeeded.
  await expect(page).toHaveURL(/inventory\.html/);
});

test('checkout page', async ({ page }) => {
    const inventoryPage = new InventoryPage(page); 
    await page.locator('#first-name').fill('Abdellah')
    await expect(page.locator('#first-name')).toHaveValue('Abdellah')
    await page.locator('#last-name').fill('Amrhar')
    await expect(page.locator('#last-name')).toHaveValue('Amrhar')
    await page.locator('#postal-code').fill('11101')
    await expect(page.locator('#postal-code')).toHaveValue('11101')
    await page.locator('#continue').click()
    const paymentInfo = page.locator(
  '[data-test="payment-info-value"]'
);
    await expect(paymentInfo).toContainText('SauceCard');
    const paymentText = await paymentInfo.innerText()
    console.log(paymentText)

});


// Open the cart
    