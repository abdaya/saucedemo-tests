import { type Page } from '@playwright/test';
import {expect, test} from '@playwright/test'

export class checkoutPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/cart.html');
  }

  async FirstName() {
    await this.page.locator('#first-name').fill('Abdellah')
  }
    
  async addOnesie() {
    await expect(this.page.locator('#first-name')).toHaveValue('Abdellah')
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
    async startCheckout() {
    await this.page.locator('#checkout').click();
    }
}