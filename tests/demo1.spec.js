import { test, expect } from "@playwright/test"

test("verify title and url of page", async ({ page }) => {
    //Arangements, Actions, Assertions
    await page.goto('https://www.demoblaze.com/');
    const pageTitle = await page.title()
    console.log(`title of page ${pageTitle}`)
    
    await expect(pageTitle).toEqual('STORE');
    await expect(page).toHaveTitle('STORE');
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL('https://www.demoblaze.com/')
})
