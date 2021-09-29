const Employee = require('../lib/Employee.js')

test('create an Employee Object', () => {
    const employee = new Employee('Matt', 1, 'me@me.com', 'Employee');

    expect(employee.name).toBe('Matt')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toBe('me@me.com')
    expect(employee.role).toBe('Employee')
})