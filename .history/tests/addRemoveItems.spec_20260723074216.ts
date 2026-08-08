import { test, expect } from '@playwright/test';
import { login } from './Login.'

test.beforeEach(async ({ page }) => {
    await login(page)
});

test('add remove items', async ({ page }) => {

    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible()

});