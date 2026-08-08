import { type Page } from "@playwright/test";

export class comfirmationPage{
    constructor(private readonly page: Page) {}
    
    async Order(){
        await this.page.getByRole('button', { name: 'finish' }).click()
    }

    async backHome() {
        await this.page.getByRole('button', {name:'back-to-products'}).click()
    }



    }




}