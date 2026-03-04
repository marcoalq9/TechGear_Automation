import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('TC-02: Login attempt with a blocked user', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('locked_out_user', 'secret_sauce');

  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Sorry, this user has been locked out');
});
