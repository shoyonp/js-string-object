const person = {
    name: 'purna',
    age: 19,
    profession: 'student',
    'fav places': ['bandorban', 'coxs bazar', 'shajek']
}

person.age = 20;
person['age'] = 21;
person['fav places'] = ['amar bari']
console.log(person)

const propName = 'profession';
person[propName] = 'devops';
console.log(person);
