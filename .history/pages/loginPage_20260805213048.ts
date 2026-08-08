import { Page, expect } from '@playwright/test';


export class loginPage {
    constructor(private readonly page: Page) { }
    
    async goto(){
    await this.page.goto('https://www.saucedemo.com/');
}
    async userNamePassword() {
        await this.page.locator('#user-name').fill('standard_user')
        await this.page.locator('#password').fill('secret_sauce')
        await this.page.locator('#login-button').click()
    }

   

    
   
}
