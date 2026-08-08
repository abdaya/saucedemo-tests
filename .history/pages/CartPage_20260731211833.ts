 import { Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async startCheckout() {
    await this.page.locator('#checkout').click();
  }
     // Click the cart badge to open the cart page
  async openCart() {
    await this.page.locator('.shopping_cart_badge').click();
}