import {test, expect} from '@playwright/test'
import { LoginPage } from '../pagests4/loginpage'

test(' Login with PAge Object Model',async({page})=>{
    await page.goto('http://localhost/login.do')
    await page.waitForTimeout(3000)

    const loginPage = new LoginPage(page)
    await loginPage.getUserName()
    await loginPage.getPassword()
    await loginPage.getLoginButton()
    await page.waitForTimeout(3000)
})
