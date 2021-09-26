const Engineer = require('../lib/Engineer.js')

test('create an Engineer Object', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String))
})