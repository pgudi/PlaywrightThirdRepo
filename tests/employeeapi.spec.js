const {test, expect} = require('@playwright/test');
const { clear } = require('console');
let employeeid=0;
test("Create Employee", async ({request})=>{
    console.log("This test responsible for creation of new Employee resource in the server");
    
    let response=await request.post('http://localhost:9090/sgtesting/api/v1/employees',
        {
            data:{
                "employeeFirstName": "Irshad",
                "employeeLastName": "A P",
                "jobName": "Front End Developer",
                "emailId": "irshad@gmail.com",
                "age": 45,
                "contactNumber": 9012345699,
                "salary": 49000,
                "departmentName": "UI Developer",
                "cityName": "Mumbai",
                "address": "7th Stage, 4th Phase Mubmai"
            },

            headers:{
                'Accept':'application/json'
            }
        })
        let jsonresponse=await response.json()
        console.log(jsonresponse);

        expect(response.status()).toBe(201)

        employeeid = jsonresponse.id;
        console.log("Employee Id :"+employeeid);     
})

test("Dispaly Newly created Employee", async({request})=>{
    console.log("This test responsible for display of newly created Employee resource from the server");
    const response=await request.get("http://localhost:9090/sgtesting/api/v1/employees/"+employeeid)
    const responsejson=await response.json()
    console.log(responsejson);
    expect(response.status()).toBe(200)    
})

test("Delete Newly created Employee", async({request})=>{
    console.log("This test responsible for deleting of newly created Employee resource from the server");
    const response=await request.delete('http://localhost:9090/sgtesting/api/v1/employees/'+employeeid)
    
    console.log((await response.body()).toString())
    expect(response.status()).toBe(200)
   
})