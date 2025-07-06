const {test, expect} = require('@playwright/test')
test('Handle Mouse Movement 1', async({page})=>{
    await page.goto("https://www.flipkart.com/")
    
    await page.locator("//span[contains(text(),'Electronics')]").hover()

    await page.locator("//a[normalize-space()='Computer Peripherals']").hover()

    await page.locator("//a[normalize-space()='Portable Projectors']").hover()

    await page.locator("//a[normalize-space()='Portable Projectors']").click()

    await expect(page.locator("//h1[normalize-space()='Portable Projectors']")).toHaveText("Portable Projectors")

})