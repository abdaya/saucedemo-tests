import { test, expect } from '@playwright/test'
import { InventoryPage } from '../pages/InventoryPage';
import {login} from '../helpers/login'

test.beforeEach(async ({ page }) => {
    await login(page);
});

test("add items", async({page}) => {
    const addInventory = new InventoryPage(page);

    await addInventory.addBackpack()
    await addInventory.addOnesie()

    await expect

})