import { type Page } from '@playwright/test';



export class checkoutPage {
  constructor(private readonly page: Page) {}
     readonly firstName: string,
     readonly   lastName: string,
        zipCode: string
    async cardInfo(
       
    ){
        await this.page.locator('#first-name').fill(firstName);
        await this.page.locator('#last-name').fill(lastName);
        await this.page.locator('#postal-code').fill(zipCode);
  }

  async Continue() {
      return await this.page.locator('#continue').click();
  }
    PayInfo() {
    return this.page.locator('[data-test="payment-info-value"]')
    }

    PayText() {
        return this.PayInfo().innerText()
    }
}
