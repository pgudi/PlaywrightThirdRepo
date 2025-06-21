const {test, expect} = require("@playwright/test")
test("Invalid Username or Password Test",async({page})=>{
    await page.goto("http://localhost/login.do")

    await page.getByPlaceholder("Username").first().fill("admin1")
   await page.getByPlaceholder("Password").first().fill("manager1")
   await page.locator("//div[normalize-space()='Login']").click()

   //Validation
   const validationContent = await page.locator("td[valign='top'] span[class='errormsg']").textContent()
   console.log("Error Content :"+validationContent);
   
   await expect(validationContent.includes("Username or Password is invalid.")).toBeTruthy()
   await expect(validationContent === "Username or Password is invalid. Please try again.").toBeTruthy()
})