import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { auditProductDescription } from '../utils/geminiAudit';

test('Misión TechGear: Auditoría con IA y Compra', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  const name = await page.locator('.inventory_item_name').first().innerText();
  const desc = await page.locator('.inventory_item_desc').first().innerText();

  console.log('Analizando producto: ' + name);
  const audit = await auditProductDescription(name, desc);

  console.log('Resultado Auditoría: ' + audit?.isAppropriate);

  expect(audit?.isAppropriate, 'Alerta de Cumplimiento: ' + audit?.reason).toBe(true);

  await products.addBackpackToCart();
  await products.goToCart();

  await page.locator('[data-test="checkout"]').click();
  await checkout.fillInformation('Marco', 'Lopez', '21001');
  await checkout.completePurchase();

  await expect(checkout.successMessage).toHaveText('Thank you for your order!');
});
