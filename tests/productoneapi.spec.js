const {test, expect} = require('@playwright/test')

test.skip('Display First Product from Fake Store',async({request})=>{
    const response=await request.get('https://fakestoreapi.in/api/products/1')
    const responsejson=await response.json()
    console.log(responsejson);
    let title = await responsejson.product.title
    console.log("title value :"+title);
    
    expect(response.status()).toBe(200)
    expect((await responsejson.product.title).includes('Bluetooth Wireless')).toBeTruthy()
    
})

test.skip('Display All Products from Fake Store', async({request})=>{
    const response = await request.get('https://fakestoreapi.in/api/products')
    const responsejson = await response.json()
    console.log(responsejson);
    expect(response.status()).toBe(200)
    
})

test('Display All Products Titles from Fake Store', async({request})=>{
    const response = await request.get('https://fakestoreapi.in/api/products')
    const responsejson = await response.json()
    const listTitle = responsejson.products
    for(let i=0;i<listTitle.length;i++){
        console.log(listTitle[i].title);
        
    }
    expect(response.status()).toBe(200)
    
})

test('Find All Products Count from Fake Store', async({request})=>{
    const response = await request.get('https://fakestoreapi.in/api/products')
    const responsejson = await response.json()
    const listTitle = responsejson.products
    let count=0;
    for(let i=0;i<listTitle.length;i++){
       count=count+1        
    }
    console.log("# of Products are :"+count);
    
    expect(response.status()).toBe(200)
    
})

test('Find Total Sum of All Products Prices from Fake Store', async({request})=>{
    const response = await request.get('https://fakestoreapi.in/api/products')
    const responsejson = await response.json()
    const listTitle = responsejson.products
    let sum=0;
    for(let i=0;i<listTitle.length;i++){
        sum=sum+listTitle[i].price
        
    }
    console.log("Total Sum of All Products Prices :"+sum);
    
    expect(response.status()).toBe(200)
    
})

