// Object Destructuring

const address = {
    street: 'new river',
    city: '',
    country: ''
};

// Way1 : Traditional way
// const street = address.street;
// const city = address.city;
// const country = address.country;

// Way2: Stylish way (Object Destructuring)
const {street:st, city, country} = address;

console.log(st);




