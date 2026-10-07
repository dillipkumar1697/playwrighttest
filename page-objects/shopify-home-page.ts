import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ShopifyHomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await super.goto('');
  }

  searchProduct(query: string): Locator {
    return this.page.getByRole('textbox', { name: 'Search', exact: true }).first();
  }

  async submitSearch(query: string): Promise<void> {
    const searchBox = this.searchProduct(query);
    await searchBox.fill(query);
    await this.page.getByRole('button', { name: 'Submit', exact: true }).click();
    await this.page.waitForURL(/\/search/);
  }

  async openLogin(): Promise<void> {
    await this.page.getByRole('link', { name: 'Log In', exact: true }).click();
    await this.page.waitForURL(/\/account\/login/);
  }

  async openCart(): Promise<void> {
    await this.page.getByRole('link', { name: 'Check Out', exact: true }).click();
    await this.page.waitForURL(/\/cart/);
  }

  async logout(): Promise<void> {
    await this.page.getByRole('link', { name: 'Log out', exact: true }).click();
    await this.page.waitForURL(/\/account\/login/);
  }
}
