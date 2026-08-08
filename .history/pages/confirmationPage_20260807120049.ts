import { type Page } from "@playwright/test";

export class confirmationPage{
    constructor(private readonly page: Page) {}
    
    async finishOrder(){
        await this.page.getByRole('button', { name: 'finish' }).click()
    }

    async backHome() {
        await this.page.getByRole('button', {name:'back-to-products'}).click()
    }
    }




