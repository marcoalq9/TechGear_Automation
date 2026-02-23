import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('TC-02: Intento de Login con usuario bloqueado', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(loginPage.errorMessage).toContainText(
    'Epic sadface: Sorry, this user has been locked out'
  );
});
