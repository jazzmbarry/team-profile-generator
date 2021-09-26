const Employee = require('../lib/Employee.js')

test('create an Employee Object', () => {
    const employee = new Employee('Matt');

    expect(employee.name).toBe('Matt')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.role).toEqual(expect.any(String))
})