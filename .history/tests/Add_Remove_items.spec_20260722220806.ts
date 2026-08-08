import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {

    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await expect(page.locator('#shopping_cart_badge')).toHaveText('1')

    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible()




});