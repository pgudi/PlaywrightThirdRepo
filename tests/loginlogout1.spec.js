const {test, expect} = require("@playwright/test")

test("Login Logout TestScript",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.locator("//button[normalize-space()='Login']").click()
    await page.getByAltText("profile picture").click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})