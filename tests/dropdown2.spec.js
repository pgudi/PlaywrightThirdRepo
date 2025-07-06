const {test, expect} = require('@playwright/test')

test('Handle Drop Down Items 2',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
  
    await page.locator("#tools").selectOption({label:'Selenium RemoteControl'})
    await page.waitForTimeout(2000)
    await page.locator("#tools").selectOption({value:'wd'})
    await page.waitForTimeout(2000)
    await page.locator("#tools").selectOption({index:1})
    await page.waitForTimeout(4000)

    
    //Display Each Item from the Drop Down
    let dropdownBox=await page.$("#tools")
    let dropdownitems =await dropdownBox.$$("option")
    console.log("Number of Items :"+(await dropdownitems).length);
    console.log("Output of Items :"+dropdownitems);
    
    for(let i=0;i<(await dropdownitems).length;i++){        
        let elementItem = await dropdownitems[i]
        let content = await elementItem.textContent()
        console.log("Drop Down Item Content :"+content); 
    }
    
})