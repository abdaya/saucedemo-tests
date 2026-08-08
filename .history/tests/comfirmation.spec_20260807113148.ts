import { test, expect } from "@playwright/test";

beforEa

test("complete order", async ({ page }) =>
{
    await page.getByRole('button', { name: 'back-to-products' }).click()
    
});