// expect (page).toHaveURL()
// expect(page).toHaveTitle()
// expect(locator). toBeVisible()
// expect(locator).toBeEnabled()
//expect(locator).not.toBeEnabled()
// expect (locator). toBeDisabled()
// expect(locator).toBeChecked()
// expect(locator).toHaveAttribute()
// expect(locator).toHaveText ()
// expect(locator).toContainText()
// expect(locator).toHaveValue(value)
// expect(locator). toHaveCount ()

import {test,expect} from '@playwright/test'

test('verify the diff assertions',async({page})=>{
    await page.goto('https://automationpanda.com/testing/')
     
    await expect(page).toHaveURL('https://automationpanda.com/testing/')
})