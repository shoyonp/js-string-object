const mobile = {
    brand: 'narzo',
    price: 20000,
    color: 'speed blue',
    camera: '50mp',
    isNew: true
}

// for of: array
// for in: object
for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':', mobile[key]);
}