const Engineer = require('../lib/Engineer.js')
const Employee = require('./Employee.test')

test('create an Engineer Object', () => {
    const engineer = new Engineer('Matt', 1, 'me@me.com', 'Engineer','me');

    expect(engineer.name).toBe('Matt')
    expect(engineer.id).toBe(1)
    expect(engineer.email).toBe('me@me.com')
    expect(engineer.role).toBe('Engineer')
    expect(engineer.github).toBe('me')
})