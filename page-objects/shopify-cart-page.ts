import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ShopifyCartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await super.goto('/cart');
  }

  async checkout(): Promise<void> {
    await this.page.getByRole('link', { name: 'Checkout', exact: true }).click();
    await this.page.waitForURL(/\/checkout\//);
  }
}
