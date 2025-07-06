const {test, except} = require('@playwright/test')
// By using keyborad we an handle single or multiple keys
test('Handling Keyboard Actions1', async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(4000)

    await page.keyboard.type("admin")
    await page.keyboard.press("Tab")
    await page.waitForTimeout(1000)
    await page.keyboard.type("manager")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(4000)
})