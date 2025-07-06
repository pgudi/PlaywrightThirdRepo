/*
    if super class has parameterized constructor
*/

class Department{
    constructor(dname,loc){
        this.dname=dname
        this.loc=loc
        console.log("Department Name:"+this.dname);
        console.log("Department Location :"+this.loc);   
    }
}

class Employee extends Department{
    constructor(ename,jobname,deptname, location){
    //    super("Accounting","Dallas")
        super(deptname,location)
        this.ename=ename
        this.jobname=jobname
        console.log("Employee Name :"+this.ename)
        console.log("Employee Job Name :"+this.jobname);
        
    }
}

let o =new Employee("Santosh","Manager", "Research","California")