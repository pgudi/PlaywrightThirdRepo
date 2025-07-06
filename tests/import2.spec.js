const {test, expect} = require('@playwright/test')

test('File Import or Upload functionality', async({page})=>{

    await page.goto("https://html-file-upload.netlify.app/multiple/")

//    await page.locator("#file-uploader").setInputFiles(["C:/QARepository3/testautomation/uploadfiles/Projects.txt","C:/QARepository3/testautomation/uploadfiles/Book1.xlsx"])
      await page.locator("#file-uploader").setInputFiles(["./uploadfiles/Projects.txt","./uploadfiles/Book1.xlsx"])
    
      await expect(page.locator("//p[@id='feedback']")).toHaveText("2 file(s) uploaded successfully!")

})