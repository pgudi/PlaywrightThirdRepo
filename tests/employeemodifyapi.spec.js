const {test, expect} = require('@playwright/test');
const { request } = require('http');
let employeeId=0;
test("Create Employee Post Restful API ", async({request})=>{
    console.log("This test responsible for creation of new Employee resource in the server");
    const response = await request.post('http://localhost:9090/sgtesting/api/v1/employees',
        {
            data:{
                "employeeFirstName": "Richard",
                "employeeLastName": "Thomas",
                "jobName": "Backend Springboot Developer",
                "emailId": "richard@gmail.com",
                "age": 47,
                "contactNumber": 9012345677,
                "salary": 51000,
                "departmentName": "Backend Developer",
                "cityName": "New York",
                "address": "Trinity Church Road NewYork"
            },
            headers:{
                'Accept':'application/json'
            }
        })
        const responsejson=await response.json()
        console.log(responsejson);
        employeeId = responsejson.id
        console.log("Employee ID :"+employeeId);
        
        expect(response.status()).toBe(201)
        
})

test('Display the Newly created Employee from the Server', async({request})=>{
    console.log("This test responsible for display of newly created Employee resource from the server");
    const response=await request.get('http://localhost:9090/sgtesting/api/v1/employees/'+employeeId)
    const responsejson=await response.json()
    console.log(responsejson);
    expect(response.status()).toBe(200)
})

test('Modify the Newly created Employee from the Server', async({request})=>{
    console.log("This test responsible for Modifying the newly created Employee resource from the server");
    const response=await request.patch('http://localhost:9090/sgtesting/api/v1/employees/'+employeeId,
        {
            data:{
               "cityName": "Hagari Bommana Halli" 
            },
            headers:{
                'Accept':'application/json'
            }
        })
        const responsejson=await response.json()
        console.log(responsejson);

        expect(response.status()).toBe(200)  
})

test('Display the Newly Modified Employee from the Server', async({request})=>{
    console.log("This test responsible for display of newly Modified Employee resource from the server");
    const response=await request.get('http://localhost:9090/sgtesting/api/v1/employees/'+employeeId)
    const responsejson=await response.json()
    console.log(responsejson);
    expect(response.status()).toBe(200)
})

test("Delete Newly modified Employee", async({request})=>{
    console.log("This test responsible for deleting of newly Modified Employee resource from the server");
    const response=await request.delete('http://localhost:9090/sgtesting/api/v1/employees/'+employeeId)
    
    console.log((await response.body()).toString())
    expect(response.status()).toBe(200)
   
})