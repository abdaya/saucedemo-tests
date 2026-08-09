import { test, expect } from '@playwright/test';


test("demo page is live", async ({ page }) => {
    await page.goto('https://abdaya.github.io/saucedemo-tests/')

    await page.getByText('H1, My CI/CD Demo version 2')
    await expect(page.getByText('H1, My CI/CD Demo version 2')).toBeVisible()

});