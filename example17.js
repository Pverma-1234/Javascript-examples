const person ={
    name: "Tommy",
    age: 2,
};

console.log(person)
console.log(person.age)
console.log(person.name)
console.log("\nJson Format")

const jsonPerson = JSON.stringify(person,null,2);
console.log(JSON.parse(jsonPerson))