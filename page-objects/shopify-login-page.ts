import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ShopifyLoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await super.goto('/account/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.page.getByLabel('Email Address', { exact: true }).fill(email);
    await this.page.getByLabel('Password', { exact: true }).fill(password);

    const submitButton = this.page.getByRole('button', { name: 'Sign In', exact: true });
    await submitButton.click();

    const loginResult = await Promise.race([
      this.page.waitForURL(/\/account\/?$/).then(() => 'authenticated'),
      this.page
        .getByText(/Choose 2 arrows|Please try again|Protected by hCaptcha/i)
        .first()
        .waitFor({ state: 'visible', timeout: 20_000 })
        .then(() => 'captcha-blocked'),
    ]);

    if (loginResult === 'captcha-blocked') {
      throw new Error(
        'Shopify login was blocked by hCaptcha. Complete the challenge manually or use a valid account that is not subject to this challenge.',
      );
    }
  }
}
