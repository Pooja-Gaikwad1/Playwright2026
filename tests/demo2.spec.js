import { test, expect } from "@playwright/test";

test('https://www.demoblaze.com/', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    // await page.locator('[id="login2"]').click();
    // await page.waitForTimeout(2000);

    // await page.locator('[id="loginusername"]').fill('pa25gaikwad@gmail.com');
    // await page.locator('[id="loginpassword"]').fill('@hardwork@24');

    // await page.locator('[onclick="logIn()"]').click();
    // await page.waitForTimeout(2000);

    // const logOutTxt = await page.locator('[id="logout2"]').textContent()

    // await expect(logOutTxt).toBe('Log out')


    // option 2 

    await page.click('[id="login2"]')

    await page.fill('[id="loginusername"]','pooja')
    await page.fill('[id="loginpassword"]','pooja@123')

    await page.click('[onclick="logIn()"]')
    await page.waitForTimeout(2000);

    const logoutText = await page.locator('[id="logout2"]')
     await expect(logoutText).toBeVisible();


     const userName = await page.locator('#nameofuser').textContent()
    await expect(userName).toContain('pooja')
    await page.waitForTimeout(3000)


})