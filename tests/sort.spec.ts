import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('TC-INV-002: Ordenar productos por nombre A-Z', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Iniciar sesión
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Seleccionar orden Name (A to Z)
  await productsPage.selectSort('az');

  // Resultado esperado: Los productos deben mostrarse en orden alfabético ascendente
  const productNames = await productsPage.getProductNames();
  const sortedNames = [...productNames].sort();
  expect(productNames).toEqual(sortedNames);
});
