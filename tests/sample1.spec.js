const {test, expect} = require("@playwright/test")

test("It is first Test Script", async function display({page}){
    expect(450).toBe(450)
})

test("It is Second Test Script", async function ({page}){
    expect(12.75).toBe(12.75)
})

test("It is Third Test Script", async ({page})=>{
    expect("GenTech Academy").toContain("GenTech")
})

test("It is Fourth Test Script", async ({page})=>{
    expect(100>=25).toBeTruthy()
})


test("It is Fifth Test Script", async ({page})=>{
    expect(10<5).toBeFalsy()
})

test("It is Sixth Test Script", async ({page})=>{
    expect("GenTech Academy".endsWith("Academy")).toBeTruthy()
})