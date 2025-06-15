const {test, expect} = require("@playwright/test")

test("TestScript on w3Schools", async({page})=>{
   await page.goto("https://www.w3schools.com/")
   await page.waitForTimeout(4000)

   //Capture URL of the Application
   const url=await page.url()
   console.log("URL of Application :"+url);

   //Capture Title of the Application
   const title = await page.title()
   console.log("Title of Application:"+title);
   
   
})