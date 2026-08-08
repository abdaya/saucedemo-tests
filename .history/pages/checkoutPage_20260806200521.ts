import { type Page } from '@playwright/test';



export class checkoutPage {
  constructor(private readonly page: Page) {}
    
    async cardInfo() {
        await this.page.locator('#first-name').fill('Abdellah');
        await this.page.locator('#last-name').fill('Amrhar');
        await this.page.locator('#postal-code').fill('11101');
  }

  async Continue() {
      return await this.page.locator('#continue').click();
  }
    PayInfo() {
    return this.page.locator('[data-test="payment-info-value"]')
    }

    PayText() {
        return await this.PayInfo().innerText()
    }
}
