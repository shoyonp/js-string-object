const address = 'mymenshing';
const part = address.slice(2,5);
// console.log(part);

const sentence = 'i am a good and hardworking person';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const shestr = 'aparna,purna,bou,punu';
const she = shestr.split(',');

console.log(she);

const herName = [ 'aparna', 'purna', 'bou', 'punu' ]
console.log(herName.join());
console.log(herName.join('|'));
console.log(herName.join('-'));