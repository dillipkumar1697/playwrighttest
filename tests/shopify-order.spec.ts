import { expect, test } from '../fixtures/pages';

const localStorefrontCredentials = {
  email: 'dillipsanthosh123@gmail.com',
  password: 'Dillip@123',
  productSearch: 'Grey jacket',
  fullName: 'Dilip Kumar',
  checkoutEmail: 'dillipsanthosh123@gmail.com',
  address1: '123 Test Street',
  address2: 'Suite 4',
  city: 'Test City',
  province: 'Test Province',
  country: 'United Kingdom',
  postalCode: 'TE1 1AA',
  phone: '+44 7700 900000',
};

test.describe('Sauce Demo storefront guest flow', () => {
  test('searches for a product, adds it to the cart, and validates the cart count without logging in', async ({
    homePage,
    productPage,
    page,
  }) => {
    await homePage.goto();
    await homePage.submitSearch(localStorefrontCredentials.productSearch);
    await productPage.openProduct(localStorefrontCredentials.productSearch);
    await productPage.addToCart();

    await expect(page.getByRole('link', { name: /My Cart \(1\)/ })).toBeVisible();
  });
});
