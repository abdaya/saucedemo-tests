import { test, expect } from '@playwright/test'

test("add items", async({page}) => {
    const addInventory = new page.InventoryPage(page);

})