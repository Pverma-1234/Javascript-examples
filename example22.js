const person = {
    name: 'John',
    age: 87,
    gender: 'M'
};

console.log(person);
let cp={ ...person,age:23 };  //Used highly in React

console.log(person);
console.log(cp);