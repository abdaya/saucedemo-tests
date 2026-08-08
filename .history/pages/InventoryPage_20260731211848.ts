import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async openCart() {
    await this.page.locator('.shopping_cart_badge').click();
  }
    
     // Click the cart badge to open the cart page
  async openCart() {
    await this.page.locator('.shopping_cart_badge').click();
}