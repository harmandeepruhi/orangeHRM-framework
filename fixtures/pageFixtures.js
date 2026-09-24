import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { AddEmployee } from '../pages/addEmployeePage'
import { DashBoard } from '../pages/dashboardPage'

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    addEmployeePage: async ({ page }, use) => {
        await use(new AddEmployee(page))
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashBoard(page))
    },
    loggedIn: async ({ loginPage, page }, use) => {
        await loginPage.navigate('/web/index.php/auth/login');
        await loginPage.login('Admin', 'admin123');
        await use(page);

    }
})

export { expect }
