import { test as setup } from '@playwright/test';
import { login } from '../helpers/login';

const authFile = 'playwright/.auth/user.json';

setup('save login session', async ({ page }) => {
  await login(page);

  await page.context().storageState({
    path: authFile,
  });
});

test('add items and continue to checkout', async ({ page }) => {
  await page.goto('/inventory.html');