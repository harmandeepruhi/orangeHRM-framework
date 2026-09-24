import { test } from '../fixtures/pageFixtures'

test('dashboard', async ({ dashboardPage, loggedIn }) => {
    await dashboardPage.verifyDashboardDisplayed()
    await dashboardPage.verifyDashboardUrl()
    await dashboardPage.verifyMenuDisplayed()
});
