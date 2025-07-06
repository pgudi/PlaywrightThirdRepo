const {test, expect} = require('@playwright/test')
test('Handle Mouse Movement 1', async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[normalize-space()='Login']").hover()

    await page.pause()
})