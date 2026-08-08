import { test, expect } from '@playwright/test'
import { InventoryPage } from '../pages/InventoryPage';

test("add items", async({page}) => {
    const addInventory = new InventoryPage(page);

    await addInventory.addBackpack()
    await addInventory.

})