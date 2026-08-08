import { Locator,type Page } from '@playwright/test';



export class checkoutPage {
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;

    constructor(private readonly page: Page) {
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.zipCode = page.locator('#postal-code')
    }
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
