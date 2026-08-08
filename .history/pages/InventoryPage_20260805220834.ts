import { type Page } from '@playwright/test';


export class InventoryPage {
  constructor(private readonly page: Page) {}

  async addBackpack() {
    await this.page
      .locator(test-name="add-to-cart-sauce-labs-backpack')
      .click();
  }

  async addOnesie() {
    await this.page
      .locator('#add-to-cart-sauce-labs-onesie')
      .click();
  }

  cartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  removeBackpackButton() {
    return this.page.locator('#remove-sauce-labs-backpack');
  }

  removeOnesieButton() {
    return this.page.locator('#remove-sauce-labs-onesie');
  }

  async openCart() {
    return await this.cartBadge().click();
    }
async startCheckout() {
    return await this.page.locator('#checkout').click();
    }
}