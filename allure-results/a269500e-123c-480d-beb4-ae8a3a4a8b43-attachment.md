# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> dashboard
- Location: tests\dashboard.spec.js:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Dashboard' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Dashboard' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Dashboard' })

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { basePage } from './base_Page';
  3  | 
  4  | export class DashBoard extends basePage{
  5  |     constructor(page){
  6  |         super(page);
  7  |     }
  8  | 
  9  |     dashboardTitle = this.page.getByRole('heading', { name: 'Dashboard' });
  10 | 
  11 |     async verifyDashboardDisplayed() {
> 12 |         await expect(this.dashboardTitle).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
  13 |     }
  14 | 
  15 |     async verifyDashboardUrl() {
  16 |         await expect(this.page).toHaveURL(/dashboard\/index/);
  17 |     }
  18 | 
  19 |     async verifyMenuDisplayed() {
  20 |         await expect(this.page.getByText('Admin', { exact: true })).toBeVisible();
  21 |         await expect(this.page.getByText('PIM', { exact: true })).toBeVisible();
  22 |         await expect(this.page.getByText('Leave', { exact: true })).toBeVisible();
  23 |         await expect(this.page.getByText('Time', { exact: true })).toBeVisible();
  24 |         await expect(this.page.getByText('Recruitment', { exact: true })).toBeVisible();
  25 |         await expect(this.page.getByText('My Info', { exact: true })).toBeVisible();
  26 |     }
  27 | }
  28 | 
  29 | 
```