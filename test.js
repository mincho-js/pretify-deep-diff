const diff = require('deep-diff');
const pretifyDeepDiff = require('./index');

const lhs = {
    name: 'John',
    age: 30,
    pets: ['dog', 'cat'],
    address: {
        city: 'Chicago',
        street: 'Main St'
    }
};

const rhs = {
    name: 'Jane',
    age: 31,
    pets: ['dog', 'parrot'],
    city: 'New York'
};

const changes = diff(lhs, rhs);

console.log(pretifyDeepDiff(changes, { locale: 'ru' }));