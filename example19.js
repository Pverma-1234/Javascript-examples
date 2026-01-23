const persons =[
    [
        {
            name: "Tommy",
            age: 2,
        },
        {
            name: "Pluto",
            age: 3,
        }
    ],
    [
        {
            name: "German",
            age: 2,
        },
        {
            name: "Sundae",
            age: 5,
        }
    ],
];

// persons.map((p,i) =>{
//     return i + ". " + p.name;
// }).forEach(n => console.log(n));
// chaining here give undefined because we have array inside array so we use flat map

// Chaining applies multiple array methods step-by-step, while flatMap() combines mapping and flattening into a single operation.

// persons.flatMap((arr,i)=>{
//     return arr.map(p => p.name);
// }).forEach(n => console.log(n));  // combine all the array and return single array

const names =persons.map((p,i)=>{
    return arr.map(p=>p.name);
});
console.log(names);