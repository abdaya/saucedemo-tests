import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test('login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')

    await expect(page.locator('#user-name')).toHaveValue('standard_user')
    await expect(page.locator('#password')).toHaveValue('secret_sauce')

    await page.locator('#login-button').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
     
    await expect(page.locator('.title')).toHaveText('Products')
});


test beforeEach(async ({page})){
    await ;ogin
}
test('add remove items', async ({ page }) => {

    

    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible()

});