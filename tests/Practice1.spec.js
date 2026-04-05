import {test,expect} from "@playwright/test";

test("verify sausedemo site title and url",async({page})=>{
    await page.goto('https://www.saucedemo.com/');

   const Title = await page.title()

    await expect(Title).toEqual('Swag Labs')
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL('https://www.saucedemo.com/')
})
