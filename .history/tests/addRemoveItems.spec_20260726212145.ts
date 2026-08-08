import { test, expect } from '@playwright/test';

test('add remove items', async ({ page }) => {
   
    await page.goto('/inventory.html');

    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible()

    await page.locator('#add-to-cart-sauce-labs-onesie').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2')

    await expect(page.locator('#remove-sauce-labs-onesie')).toBeVisible()

    await page.locator('.shopping_cart_badge').click()

    await page.locator('#checkout').click()
    await page.locator('#first-name').fill('Abdellah')
    await expect(page.locator('#first-name')).toHaveValue('Abdellah')
    await page.locator('#last-name').fill('Amrhar')
    await expect(page.locator('#last-name')).toHaveValue('Amrhar')
    await page.locator('#postal-code').fill('11101')
    await expect(page.locator('#postal-code')).toHaveValue('11101')
    await page.locator('#continue').click()
    const paymentInfo = await page.getByText('SauceCard #31337')

});
