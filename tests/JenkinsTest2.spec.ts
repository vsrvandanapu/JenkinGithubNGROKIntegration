import { test, expect } from '@playwright/test';

test('Test 4 @QA', async ({ page }) => {
    console.log("Starting Test 4 ");
  await page.goto('https://google.com/');
console.log(await page.title());
  await expect(page).toHaveTitle("Google");
  console.log("Ending Test 4 ");
});

test('Test 5', async ({ page }) => {
    console.log("Starting Test 5 ");
  await page.goto('https://google.com/');
console.log(await page.title());
  await expect(page).toHaveTitle("Facebook");
  console.log("Ending Test 5 ");
});

// test('Test 6', async ({ page }) => {
//     console.log("Starting Test 6 ");
//   await page.goto('https://google.com/');
// console.log(await page.title());
//   await expect(page).toHaveTitle("Google");
//   console.log("Ending Test 6 ");
// });