const {test, expect} = require('@playwright/test')
const {LoginPage} = require('./../pages1/loginpage')

test('Login with Page Object Model', async ({page})=>{
    await page.goto("http://localhost/login.do")

    //Create Object for LoginPage
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication()

    await page.pause()
})