import { test as setup } from '@playwright/test';


const authFile = 'playwright/.auth/user.json';

setup('save login session', async ({ page }) => {
  await login(page);

  await page.context().storageState({
    path: authFile,
  });
});

