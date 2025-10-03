import { test, expect } from "@playwright/test";

test("Test 1", async ({ page }) => {
  console.log("Starting Test 1 ");
  await page.goto("https://gmail.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Gmail");
  await page.waitForTimeout(2000);
  console.log("Ending Test 1 ");
});

test("Test 2 ", async ({ page }) => {
  console.log("Starting Test 2 ");
  await page.goto("https://login.salesforce.com/?locale=in");
  console.log(await page.title());
  await expect(page).toHaveTitle("Login | Salesforce");
  console.log("Ending Test 2");
});

test("Test 3 ", async ({ page }) => {
  console.log("Starting Test 3 ");
  await page.goto("https://google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
  console.log("Ending Test 3 ");
});
