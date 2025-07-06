const {test, expect} = require('@playwright/test')

test('Handle Drop Down Items 1',async ({page})=>{
    await page.goto("file:///C:/Demo/Sample.html")
  
    await page.locator("#tools").selectOption({label:'Selenium RemoteControl'})
    await page.waitForTimeout(2000)
    await page.locator("#tools").selectOption({value:'wd'})
    await page.waitForTimeout(2000)
    await page.locator("#tools").selectOption({index:1})
    await page.waitForTimeout(4000)

    //Display All Drop down Item Names
    const listItems=await page.locator("#tools").allTextContents()
    console.log("All List Items :"+listItems);
    
    //Display Each Item from the Drop Down
    for(let i=0;i<listItems.length;i++){
        let itemName=listItems[i]
        console.log("Item Name :"+itemName);
        if(itemName.includes('RemoteControl')){
            await expect(itemName.includes('RemoteControl')).toBeTruthy()
            break
        }
    }
})