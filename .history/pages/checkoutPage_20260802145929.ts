import { type Page } from '@playwright/test';



export class checkoutPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/cart.html');
  }

async clickCheckou    
  async firstName() {
    return await this.page.locator('#first-name').fill('Abdellah')
  }
    
  async lastName() {
      return await this.page.locator('#last-name').fill('Amrhar');
  }

  async zipNumber() {
      return await this.page.locator('#postal-code').fill('11101');
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
