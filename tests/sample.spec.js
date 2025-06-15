const {test, expect} = require('@playwright/test')

test("It is First Test", async function display({page}){
    console.log("It is First Test");
    
})

test("It is Second Test", async function ({page}){
    console.log("It is Second Test");
    
})

test("It is Third Test", async  ({page})=>{
    console.log("It is Third Test");
    
})
