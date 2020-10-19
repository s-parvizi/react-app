// Spread Operator

const first = [1, 2, 3];
const second = [4, 5, 6];

// Way1
const combined1 = first.concat(second);

// Way2 : Spread Operator
const combined2 = [...first, 'a', ...second];

// We can make clone easily
const clone = [...first];

// we can use spread operator for objects too
const firstPart = {name: "Name"};
const secondPart = {family: "Family"};

const combined = {...firstPart, ...secondPart, location: "US"};
console.log(combined);

// clone objects

const cloneObject = {...combined};
console.log(cloneObject);

