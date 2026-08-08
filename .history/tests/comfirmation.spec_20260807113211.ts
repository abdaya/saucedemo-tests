import { test, expect } from "@playwright/test";

test beforEach()

test("complete order", async ({ page }) =>
{
    await page.getByRole('button', { name: 'back-to-products' }).click()
    
});