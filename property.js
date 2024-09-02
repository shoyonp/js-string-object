const person = {
    name: 'purna',
    age: 19,
    profession: 'student',
    'fav places': ['bandorban', 'coxs bazar', 'shajek']
}

// console.log(person)

//  dot notation
// console.log(person.name);
const she = person.name;
// console.log(she)

//  bracket notation
//  third bracket diye access korbo
console.log(person['age'])
const boyos = person['age']
console.log(boyos);

// error
// console.log(person.'fav places')
console.log(person["fav places"])

const keyName = 'profession'
console.log(person[keyName])
