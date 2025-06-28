const {test, expect} = require('@playwright/test')
const testdata = require('./../datafiles/logindata.json')
const testdata1 = require('./../datafiles/logindata1.json')
const testdata2 = require('./../datafiles/logindata2.json')
test('Read JSON File Data', async({page})=>{
   
    console.log("User Name :"+testdata.username)
    console.log("Password :"+testdata.password);
  
})

test('Read JSON Array Data', async({page})=>{
   
    for(let test1 of testdata1){
        console.log("User Name :"+test1.username)
        console.log("Password :"+test1.password);
    }
  
})

test.only('Read Nested JSON Data', async({page})=>{
    console.log("User Name :"+testdata2.user1.username)
    console.log("Password :"+testdata2.user1.password);
    console.log("User Name :"+testdata2.user2.username)
    console.log("Password :"+testdata2.user2.password);
})