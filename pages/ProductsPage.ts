import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly backpackAddToCartBtn: Locator;
  readonly cartIcon: Locator;
  readonly sortSelect: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.backpackAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.sortSelect = page.locator('.product_sort_container');
    this.productNames = page.locator('.inventory_item_name');
  }

  async addBackpackToCart() {
    await this.backpackAddToCartBtn.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async selectSort(option: string) {
    await this.sortSelect.selectOption(option);
  }

  async getProductNames(): Promise<string[]> {
    return await this.productNames.allTextContents();
  }
}
