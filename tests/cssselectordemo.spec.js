const {test, expect} = require('@playwright/test')
/*
  case 1: tagName with id attribute
*/
test('Case 1:tagName with id attribute',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("input#uid1user1name1").fill("DemoUser1")
    await page.waitForTimeout(2000)
})

/*
  case 2: id attribute alone
*/
test('Case 2:id attribute alone',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("#uid1user1name1").fill("DemoUser2")
    await page.waitForTimeout(2000)
})

/*
  case 3: tagName with class attribute
*/
test('Case 3:tagName with class attribute',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("input.pass1word1").fill("passwordWelcome1")
    await page.waitForTimeout(2000)
})

/*
  case 4: class attribute alone
*/
test('Case 4:class attribute alone',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator(".pass1word1").fill("passwordWelcome2")
    await page.waitForTimeout(2000)
})

/*
  case 5: tagName with attribute Name and value combination
*/
test.only('Case 5:tagName with attribute Name and value combination',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("input[name='pass1word1']").fill("passwordWelcome3")
    await page.waitForTimeout(2000)
})
