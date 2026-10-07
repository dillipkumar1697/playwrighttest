# Sauce Demo E2E Framework

This project uses Playwright with the Page Object Model (POM).

## Run the test

1. Copy `.env.example` to `.env` and populate the values.
2. Run `npm test`.
3. Open the generated HTML report with `npm run report`.

The test requires real Shopify storefront credentials and checkout details. Do not commit `.env` or any credentials.

## Failure artifacts

Playwright automatically records:

- Screenshots on failure
- Videos on failure
- Traces on failure
- HTML test report

Artifacts are written under `test-results/` and `playwright-report/`.
