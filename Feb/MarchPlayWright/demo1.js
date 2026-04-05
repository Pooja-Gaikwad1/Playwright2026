//@ts-check

import {test, expect} from '@playwright/test'
test('test header',async({page})=>{
    //tc1
    //Arrangement
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    //Action (css selector)
    let headingEle = await page.locator('h1')
    let text = await headingEle.textContent()
    //Assertion

    console.log(text)
    expect(text).toEqual('Practica Page')

    let inputElement = page.locator('#name')
    let inputElementByClassFirst  = page.locator('.inputs').first()
    let inputElementByClassLast  = page.locator('.inputs').last()
    let inputElementByClassSecond  = page.locator('.inputs').nth(2)
    let inputElementByClassThird  = page.locator('.inputs').nth(3)


})
