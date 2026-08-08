import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await login(page)
});

test('add remove items', async ({ page }) => {

    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible()

    await page.locator('#add-to-cart-sauce-labs-onesie').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2')

    await expect(page.locator('#remove-sauce-labs-onesie')).toBeVisible()

    await page.locator('.shopping_cart_badge').click()

    await page.locator('#checkout').click()
    await page.locator('#first-name').fill('Abdellah')
    await expect(page.locator('#first-name')).toHaveText('Abdellah')
    await page.locator('#last-name').fill('Amrhar')
    await expect(page.locator('#last-name')).toHaveText('Amrhar')
    await page.locator('#postal-code').fill('11101')
    await expect(page.locator('#postal-code')).toHaveText('11101')
    await page.locator('#continue').click()



});
