import { Page } from '@playwright/test';

const baseUrl = process.env.STORE_BASE_URL ?? 'https://sauce-demo.myshopify.com';

export abstract class BasePage {
  protected readonly page: Page;
  protected readonly baseUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = baseUrl;
  }

  async goto(path = ''): Promise<void> {
    await this.page.goto(new URL(path, this.baseUrl).toString());
    await this.page.waitForLoadState('networkidle');
  }
}
