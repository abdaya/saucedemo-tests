import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async addBackpackAndOnesie() {
    await this.page.goto('/inventory.html');

    await this.page
      .locator('#add-to-cart-sauce-labs-backpack')
      .click();

    await expect(
      this.page.locator('.shopping_cart_badge')
    ).toHaveText('1');

    await expect(
      this.page.locator('#remove-sauce-labs-backpack')
    ).toBeVisible();

    await this.page
      .locator('#add-to-cart-sauce-labs-onesie')
      .click();

    await expect(
      this.page.locator('.shopping_cart_badge')
    ).toHaveText('2');

    await expect(
      this.page.locator('#remove-sauce-labs-onesie')
    ).toBeVisible();
  }
}