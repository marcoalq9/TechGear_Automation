import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly backpackAddToCartBtn: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.backpackAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.backpackAddToCartBtn.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
