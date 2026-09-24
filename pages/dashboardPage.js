import { expect } from '@playwright/test';
import { basePage } from './base_Page';

export class DashBoard extends basePage{
    constructor(page){
        super(page);
    }

    dashboardTitle = this.page.getByRole('heading', { name: 'Dashboard' });

    async verifyDashboardDisplayed() {
        await expect(this.dashboardTitle).toBeVisible();
    }

    async verifyDashboardUrl() {
        await expect(this.page).toHaveURL(/dashboard\/index/);
    }

    async verifyMenuDisplayed() {
        await expect(this.page.getByText('Admin', { exact: true })).toBeVisible();
        await expect(this.page.getByText('PIM', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Leave', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Time', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Recruitment', { exact: true })).toBeVisible();
        await expect(this.page.getByText('My Info', { exact: true })).toBeVisible();
    }
}

