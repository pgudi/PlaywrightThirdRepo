const {test, expect} = require('@playwright/test')

test('Handling Frames Components Test', async({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/index.html")

    const iframe1 = await page.frameLocator("//frame[@title='All Packages']")
    await iframe1.locator("//a[normalize-space()='java.awt']").click()
    await page.waitForTimeout(3000)

    const iframe2 = await page.frameLocator("//frame[@title='All classes and interfaces (except non-static nested types)']")
    await iframe2.locator("//span[normalize-space()='ActiveEvent']").click()
    await page.waitForTimeout(3000)

    const iframe3 = await page.frameLocator("//frame[@title='Package, class and interface descriptions']")
    const content = await iframe3.locator("//div[@class='description']//div[1]").textContent()
    console.log("Text Content :"+content);
    
})