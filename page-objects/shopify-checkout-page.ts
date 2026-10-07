import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export type CheckoutDetails = {
  fullName: string;
  email: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  phone: string;
};

export class ShopifyCheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillAddress(details: CheckoutDetails): Promise<void> {
    await this.page.getByLabel('Full name', { exact: true }).fill(details.fullName);
    await this.page.getByLabel('Email', { exact: true }).fill(details.email);
    await this.page.getByLabel('Address', { exact: true }).fill(details.address1);
    if (details.address2) {
      await this.page.getByLabel('Apartment, suite, etc.', { exact: true }).fill(details.address2);
    }
    await this.page.getByLabel('City', { exact: true }).fill(details.city);
    await this.page.getByLabel('Province', { exact: true }).fill(details.province);
    await this.page.getByLabel('Country', { exact: true }).fill(details.country);
    await this.page.getByLabel('ZIP / postal code', { exact: true }).fill(details.postalCode);
    await this.page.getByLabel('Phone', { exact: true }).fill(details.phone);
  }

  async placeOrder(): Promise<void> {
    await this.page.getByRole('button', { name: 'Place order', exact: true }).click();
    await this.page.waitForURL(/\/checkout\/success/);
  }
}
