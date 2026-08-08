import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';


test('add items and proceed to checkout', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.goto();

  await inventoryPage.addBackpack();
  await expect(inventoryPage.cartBadge()).toHaveText('1');
  await expect(
    inventoryPage.removeBackpackButton()
  ).toBeVisible();

  await inventoryPage.addOnesie();
  await expect(inventoryPage.cartBadge()).toHaveText('2');
  await expect(
    inventoryPage.removeOnesieButton()
  ).toBeVisible();

  await inventoryPage.openCart();
  await cartPage.startCheckout();
});