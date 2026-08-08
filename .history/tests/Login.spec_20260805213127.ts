import { test, expect } from '@playwright/test';
import { login } from '../pages/login.ts';





 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
await expect(page.locator('.title')).toHaveText('Products')