import { type Page } from '@playwright/test';



export class checkoutPage {
  constructor(private readonly page: Page) {}
     readonly firstName = this.page.locator('#first-name')
     readonly lastName =  this.page.locator('#first-name')
     readonly zipCode = this.page.locator('#postal-code')
    async cardInfo(
       
    ){
        await this.firstName
        await this.
        await 
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
