const people = [
  { id: "1", name: "bob", age: 200 },
  { id: "2", name: "bobby", age: 100 },
  { id: "3", name: "bobbie", age: 500 },
  { id: "4", name: "bobert", age: 800 },
];

let result;

//count
result = people.reduce((acc, person) => acc + 1, 0);

//sum of all ages
result = people.reduce((acc, person) => acc + person.age, 0);

//array of names (as if we are using map)
result = people.reduce((acc, person) => [...acc, person.name], []);

//convert to id => person look up (dictionary) ID is key, person name is the value.
result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});
// console.log(result["3"]);

//max age
result = people.reduce((acc, person) => {
  if (acc === null || person.age > acc) return person.age;
  return acc;
}, null);

//min age
result = people.reduce((acc, person) => {
  if (acc === null || person.age < acc) return person.age;
  return acc;
}, null);

//find by name , NOT REALLY EFFICIENT THOUGHHHH just use find
result = people.reduce((acc, person) => {
  if (acc !== null) return acc;
  if (person.name === "bob") return person;
  return null;
}, null);

//over 90
result = people.reduce((acc, person) => {
  if (!acc) return false;
  return person.age > 90;
}, true);

//any over 90?
result = people.reduce((acc, person) => {
  if (acc) return true;
  return person.age > 1000;
}, false);

//count occurences
const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];

result = orders.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});

//flatten an array
const folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];

function flatten(acc, item) {
  if (Array.isArray(item)) {
    return [...acc, ...item.reduce(flatten, [])];
  }
  return [...acc, item];
}
result = folders.reduce(flatten, []);

// //create reduce ourselves
// function reduce(array, callback, initial) {
//   let acc = initial;
//   for (let i = 0; i < array.length; i++) {
//     acc = callback(acc, array[i], i, array);
//   }
//   return acc;
// }

// result = reduce([1, 2, 3], (acc, num) => acc + num, 0);
console.log(result);
