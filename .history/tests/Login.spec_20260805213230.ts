import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login.ts';


test login("valid login")


 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
await expect(page.locator('.title')).toHaveText('Products')