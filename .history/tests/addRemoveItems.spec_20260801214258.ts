import { test, expect } from '@playwright/test';
import { login } from '@helpers/login'
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('add remove items', async ({ page }) => {
   
    const cartPage = new CartPage(page);
    const inventoryPage = new InventoryPage(page);
    
    // Open the cart
    await page.locator('.shopping_cart_badge').click()

    // Use the custom method from CartPage.ts
    await cartPage.startCheckout();
   
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
