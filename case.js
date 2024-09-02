const school = 'BERA BB MODEL PILOT HIGH SCHOOL';

console.log(school);
console.log(school.toLocaleLowerCase());
console.log(school.toLocaleUpperCase());

//  uppercase: ABCD
//  lowercase: abcd

const sunject = 'Physics';
const book = 'phYsics';
if(sunject.toLocaleLowerCase === book.toLocaleLowerCase){
    console.log('i am reading book');
}
else{
    console.log('mair kha');
}

const drink = ' water';
const liquid = '   water  ';

if(drink.trim === liquid.trim){
    console.log('ronaldo siuu');
}
else{
    console.log('messi alcohol');
}
