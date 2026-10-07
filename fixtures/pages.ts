import { test as baseTest } from '@playwright/test';
import { ShopifyCartPage } from '../page-objects/shopify-cart-page';
import { ShopifyCheckoutPage } from '../page-objects/shopify-checkout-page';
import { ShopifyHomePage } from '../page-objects/shopify-home-page';
import { ShopifyLoginPage } from '../page-objects/shopify-login-page';
import { ShopifyProductPage } from '../page-objects/shopify-product-page';

type PageObjects = {
  homePage: ShopifyHomePage;
  loginPage: ShopifyLoginPage;
  productPage: ShopifyProductPage;
  cartPage: ShopifyCartPage;
  checkoutPage: ShopifyCheckoutPage;
};

export const test = baseTest.extend<PageObjects>({
  homePage: async ({ page }, use) => await use(new ShopifyHomePage(page)),
  loginPage: async ({ page }, use) => await use(new ShopifyLoginPage(page)),
  productPage: async ({ page }, use) => await use(new ShopifyProductPage(page)),
  cartPage: async ({ page }, use) => await use(new ShopifyCartPage(page)),
  checkoutPage: async ({ page }, use) => await use(new ShopifyCheckoutPage(page)),
});

export { expect } from '@playwright/test';
