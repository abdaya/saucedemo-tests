import { type Page } from '@playwright/test';


export class InventoryPage {
  constructor(private readonly page: Page) {}

    async addItem(itemName: string) {
        await this.page
            .locator(`data-test=add-to-cart-${itemName}`)
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
    
    async sortItems() {
        await this.page.locator('[data-test="product-sort-container"]').click()
        await this.page.'Price (low to high)'}).click()
}

}