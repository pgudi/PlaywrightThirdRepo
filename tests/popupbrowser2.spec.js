const {test, expect} = require("@playwright/test")

test("Handle popup Browsers or Tabbed Browsers",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    page.goto("https://www.w3schools.com/")

    const [newpage]=await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator("//a[@class='user-anonymous tnb-certificates-btn w3-bar-item w3-button w3-right w3-white ga-top ga-top-certificates']").click()
        ]
    )

    await newpage.locator("//input[@placeholder='What are you looking for?']").fill("Selenium WebDriver Courses")
    await newpage.keyboard.press("Enter")
    await newpage.close()
    await page.waitForTimeout(4000)
})