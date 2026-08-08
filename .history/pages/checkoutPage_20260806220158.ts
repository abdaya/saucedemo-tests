import { type Page } from '@playwright/test';



export class checkoutPage {
    refirstName
    lastName
    zipCode

  constructor(private readonly page: Page) {}
      firstName = this.page.locator('#first-name')
      lastName =  this.page.locator('#first-name')
      zipCode = this.page.locator('#postal-code')
    async cardInfo(
       
    ){
        await this.firstName
        await this.lastName
        await this.zipCode
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
