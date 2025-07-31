import {test, expect} from '@playwright/test'

test('Login into Application', async({page})=>{
    await page.goto('http://localhost/login.do')
    await page.waitForTimeout(3000)

    await page.getByPlaceholder("Username").first().fill("admin")
    await page.getByPlaceholder("Password").first().fill("manager")
    await page.locator("//div[normalize-space()='Login']").click()

    //Minimize Flyout window
   await page.locator("//div[@id='gettingStartedShortcutsPanelId']").click()
   await page.locator("#logoutLink").click()
   await expect(page).toHaveURL("http://localhost/login.do")
   await expect(page).toHaveTitle("actiTIME - Login")

   //Featch Title of the Application
    const title = await page.title()
    expect(title.includes("Login")).toBeTruthy()
    expect(title === 'actiTIME - Login').toBeTruthy()
})