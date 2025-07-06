const {test, except} = require('@playwright/test')
// By using keyborad we an handle single or multiple keys
test('Handling Keyboard Actions1', async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(4000)

    await page.keyboard.type("Bhaghath Singh")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Control+A")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Delete")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(1000)
})