const Intern = require('../lib/Intern.js')
const Employee = require('./Employee.test')


test('create an Intern Object', () => {
    const intern = new Intern('Matt', 1, 'me@me.com', 'School', 'Intern');

    expect(intern.name).toBe('Matt')
    expect(intern.id).toBe(1)
    expect(intern.email).toBe('me@me.com')
    expect(intern.role).toBe('Intern')
    expect(intern.school).toBe('School')
})