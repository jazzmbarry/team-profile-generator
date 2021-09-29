class Employee {
    constructor(name = '', id = Number, email = ''){
        this.name = name
        this.id = id 
        this.email = email
        this.role = "Employee"
    }
    
    getName() {
        this.Employee = new Employee(name);
    }
    
    getId() {        
        this.Employee = new Employee(id);
    }
    
    getEmail() {
        this.Employee = new Employee(email);
    }
    
    getRole() {
        this.Employee = new Employee(role);  
    }
}

module.exports = Employee