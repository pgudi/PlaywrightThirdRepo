const {test, expect} = require("@playwright/test")

test("Handle Popup or Tabbed Browsers", async ({browser})=>{

    const context = await browser.newContext()
    const page=await context.newPage()
    await page.goto("http://localhost/login.do")
    
    await page.waitForTimeout(5000)

    const [newpage]=await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator("//a[normalize-space()='actiTIME Inc.']").click()
            
        ]
    )
    await newpage.locator("//a[normalize-space()='Log in']").click()
    await newpage.waitForTimeout(5000)
    await newpage.locator("//input[@id='Enteryouremail']").fill("demouser1@actitime.com")
    await newpage.waitForTimeout(5000)
 //   await newpage.close()

    await page.locator("//input[@id='username']").fill("admin")
    await page.waitForTimeout(5000)
    
})