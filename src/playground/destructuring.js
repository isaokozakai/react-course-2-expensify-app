// const person = {
//   name: 'Isao',
//   age: 33,
//   location: {
//     city: 'Tokyo',
//     temp: 20
//   }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//   title: 'Ego is the Enemy',
//   aothor: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [hotCoffee,,medium] = item;
console.log(`A medium ${hotCoffee} costs ${medium}`);