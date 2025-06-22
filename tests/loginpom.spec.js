const {test, expect} = require('@playwright/test')
const LoginPage = require("./../pages/loginpage")

test("Login using POM Test",async({page})=>{
    await page.goto("http://localhost/login.do")

    //Create object for LoginPage
    let loginpage = new LoginPage(page)
    await loginpage.loginApplication()

    await page.pause()
})