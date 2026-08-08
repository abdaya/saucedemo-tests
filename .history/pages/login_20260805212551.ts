import { Page, expect } from '@playwright/test';


export class loginPage {
    constructor(private readonly page: Page) { }
    
    async goto(){
    await this.page.goto('https://www.saucedemo.com/');
}
    async user
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')

    await expect(page.locator('#user-name')).toHaveValue('standard_user')
    await expect(page.locator('#password')).toHaveValue('secret_sauce')

    await page.locator('#login-button').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
     
    await expect(page.locator('.title')).toHaveText('Products')
}
