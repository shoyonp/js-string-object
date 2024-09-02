const varsity = {
    name: 'diu',
    dep: ['ces', 'law', 'eee'],
    events: ['science fair', 'bijoy dibosh', '21 feb'],
    unique:{
        color: 'black',
        result: {
            cgpa: 4,
             merit: 'top'
        }
    }
}

// console.log(varsity.unique.color)
varsity.unique.result.merit = 'toop top top most'
console.log(varsity['unique'].result.merit)
varsity.events[1] = '16 dec'
console.log(varsity.events[1])
delete varsity.dep;
console.log(varsity)