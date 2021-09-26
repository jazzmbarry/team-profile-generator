const Manager = require('../lib/Manager.js')

test('create a Manager Object', () => {
    const manager = new Manager();

    expect(manager.officeNumber).toEqual(expect.any(Number))
})