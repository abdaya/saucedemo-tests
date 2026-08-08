import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async openCart() {
    await this.page.locator('.shopping_cart_badge').click();
  }
    
    
}