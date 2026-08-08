import { Page } from '@playwright/test';
import { type Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async addBackpack() {
    await this.page
      .locator('#add-to-cart-sauce-labs-backpack')
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
    await this.cartBadge().click();
  }
}