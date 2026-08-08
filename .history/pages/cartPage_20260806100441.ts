import { Page } from '@playwright/test'


export class cartPage{
    constructor(private readonly page: Page) { }
    
    async startCheckout() {
    return await this.page.locator('#checkout').click();
    }








}