const {test, expect} = require('@playwright/test')
/*
  case 1: Based on Index
  //<tagName>[index]
*/
test('Case 1:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//input[1]").first().fill("DemoUser1")
    await page.waitForTimeout(1000)
})

/*
  case 2: Based on tagName with attributeName and value combination
  //<tagName>[@attributeName='attributeValue']
*/
test('Case 2:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//input[@id='pwd1pass1word1']").fill("DemoUser2")
    await page.waitForTimeout(2000)
})

/*
  case 3: Based on  attributeName and value combination
  //*[@attributeName='attributeValue']
*/
test('Case 3:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//*[@id='pwd1pass1word1']").fill("DemoUser3")
    await page.waitForTimeout(2000)
})

/*
  case 4: Based on Attribute value combination
  //*[@*='attributeValue']
*/
test('Case 4:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//*[@*='pwd1pass1word1']").fill("DemoUser4")
    await page.waitForTimeout(2000)
})

/*
  case 5: Based on Multiple Attibute Name and Attribute value combination
  //<tagName>[@attrbute1='value1'][@attribute2='value2]
*/
test('Case 5:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//input[@name='pass1word1'][@type='text']").fill("demoUser5")
    await page.waitForTimeout(2000)
})

/*
  case 6: Based on Multiple Attibute Name and Attribute value combination
   using and operator
  //<tagName>[@attrbute1='value1' and @attribute2='value2]
*/
test('Case 6:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//input[@name='pass1word1' and @type='text']").fill("demoUser6")
    await page.waitForTimeout(2000)
})

/*
  case 7: Based on Multiple Attibute Name and Attribute value combination
   using or operator
  //<tagName>[@attrbute1='value1' or @attribute2='value2]
*/
test('Case 7:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//input[@name='pass1word1' or @id='pwd1pass1word1']").fill("demoUser7")
    await page.waitForTimeout(2000)
})

/*
  case 8: Based on Partial MAtching of Attribute value 
  //<tagName>[starts-with(@attributeName, 'value')]
  //<tagName>[ends-with(@attributeName, 'value')]
  //<tagName>[contains(@attributeName, 'value')]
*/
test('Case 8:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//input[starts-with(@id,'pwd1')]").fill("demoUser8")
    await page.waitForTimeout(2000)
})


/*
  case 9: Based on Text Content
  //<tagName>[text()='content']
 
*/
test('Case 9:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//a[text()='POI Apache']").click()
    await page.waitForTimeout(2000)
})

/*
  case 10: Based on Partial Matching of Text Content
  //<tagName>[starts-with(text(),'content')]
  //<tagName>[ends-with(text(),'content')]
  //<tagName>[contains(text(),'content')]
 
*/
test.only('Case 10:Relative XPath Test',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
    await page.locator("//a[contains(text(),'Software')]").click()
    await page.waitForTimeout(2000)
})