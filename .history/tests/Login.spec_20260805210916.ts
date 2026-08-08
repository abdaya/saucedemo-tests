import { test, expect } from '@playwright/test';
import { login } from '../pages/login.ts';



test.beforeEach(async ({ page }) => {
    await login(page);
});

