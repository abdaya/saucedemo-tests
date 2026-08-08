import { test, expect } from "@playwright/test";


test("complete order", async ({ page}) =>{
    await page.getByRole('button', { name: 'back-to-products' })
    
}