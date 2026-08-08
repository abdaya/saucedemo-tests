import { Page, expect } from '@playwright/test';


export class loginPage {
    constructor(private readonly page: Page) { }
    
    async goto(){
    await this.page.goto('https://www.saucedemo.com/');
}
    async userNamePassword(username: string, password: string) {
        await this.page.locator('#user-name').fill(username)
        await this.page.locator('#password').fill(pa)
        await this.page.locator('#login-button').click()
    }

   

    
   
}
