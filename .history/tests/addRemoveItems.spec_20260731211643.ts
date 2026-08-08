import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test('add remove items', async ({ page }) => {
   
    const cartPage = new CartPage(page);
    await page.goto('/inventory.html');

    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible()

    await page.locator('#add-to-cart-sauce-labs-onesie').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2')

    await expect(page.locator('#remove-sauce-labs-onesie')).toBeVisible()

});
