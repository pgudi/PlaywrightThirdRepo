const {test, expect} = require('@playwright/test')

test('File Import or Upload functionality', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("C:/QARepository3/testautomation/uploadfiles/Projects.txt")
    
    await page.locator("#file-submit").click()

    await expect(page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!")
    let filename1 = await page.locator("//div[@id='uploaded-files']").textContent()
    console.log("Uploaded file Name :"+filename1);
    
    await expect(filename1.includes("Projects.txt")).toBeTruthy()
})