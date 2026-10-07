import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ShopifyProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openProduct(productName: string): Promise<void> {
    await this.page.getByRole('link', { name: new RegExp(productName, 'i') }).first().click();
    await this.page.waitForURL(/\/products\//);
  }

  async addToCart(): Promise<void> {
    const addToCartButton = this.page.getByRole('button', { name: 'Add to Cart', exact: true });
    await addToCartButton.waitFor({ state: 'visible' });
    if (await addToCartButton.isDisabled()) {
      throw new Error('Add to cart button is disabled.');
    }
    await addToCartButton.click();
    await this.page.getByRole('link', { name: /My Cart/ }).waitFor({ state: 'visible' });
  }
}
