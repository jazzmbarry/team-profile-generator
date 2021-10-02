const Manager = require('../lib/Manager.js')
const Employee = require('./Employee.test')


test('create a Manager Object', () => {
    const manager = new Manager('Matt', 1, 'me@me.com', 2,  'Manager');

    expect(manager.name).toBe('Matt')
    expect(manager.id).toBe(1)
    expect(manager.email).toBe('me@me.com')
    expect(manager.officeNumber).toBe(2)
    expect(manager.role).toBe('Manager')
})