const {test, expect} = require("@playwright/test")
test.use({viewport:{width:1530, height:860}})

test("Maximize the Browser Tests", async ({page})=>{
    const width = await page.viewportSize().width
    const height = await page.viewportSize().height
    console.log("width :"+width);
    console.log("Height :"+height);
    
    await page.goto("http://localhost/login.do")

   // await page.locator("//input[@id='username']").fill("admin")
   await page.getByPlaceholder("Username").first().fill("admin")
   await page.getByPlaceholder("Password").first().fill("manager")
   await page.locator("//div[normalize-space()='Login']").click()
   
   //Minimize Flyout window
   await page.locator("//div[@id='gettingStartedShortcutsPanelId']").click()
   await page.locator("#logoutLink").click()
   await expect(page).toHaveURL("http://localhost/login.do")
   await expect(page).toHaveTitle("actiTIME - Login")

   //Featch Title of the Application
    const title = await page.title()
    await expect(title.includes("Login")).toBeTruthy()
    await expect(title === 'actiTIME - Login').toBeTruthy()
})