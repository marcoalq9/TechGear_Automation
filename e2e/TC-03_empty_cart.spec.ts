import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('TC-03: Checkout with an empty cart (Edge Case)', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.goToCart(); // Ir al carrito sin agregar nada
  await page.locator('[data-test="checkout"]').click();

  await expect(page).toHaveURL(/.*checkout-step-one/);
  console.log('Nota: El sistema permite checkout con carrito vacío (Reportado)');
});
