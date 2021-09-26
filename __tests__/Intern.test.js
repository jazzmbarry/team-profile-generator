const Intern = require('../lib/Intern.js')

test('create an Intern Object', () => {
    const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String))
})