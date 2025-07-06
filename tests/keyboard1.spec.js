const {test, except} = require('@playwright/test')
// By using keyborad we an handle single or multiple keys
test('Handling Keyboard Actions1', async({page})=>{
    await page.goto("http://localhost/login.do")

    await page.locator("//input[@id='username']").fill("admin")
    await page.locator("input[placeholder='Password']").fill("manager")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(4000)
})