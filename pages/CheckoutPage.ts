import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.zipCodeInput = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
    this.successMessage = page.locator('.complete-header');
  }

  async fillInformation(name: string, last: string, zip: string) {
    await this.firstNameInput.fill(name);
    await this.lastNameInput.fill(last);
    await this.zipCodeInput.fill(zip);
    await this.continueBtn.click();
  }

  async completePurchase() {
    await this.finishBtn.click();
  }
}
