function addNumbers(a,b){
    a = a ??= 0;
    b = b ??= 0; //if value of a is absent then take a as 0 else b as 0 --> this is nulish operation
    return Number(a)+Number(b);
}
let a=10;
// let b=20;
let result=addNumbers(a);
console.log(result);









function addNumbers(a,b){
     //if value of a is absent then take a as 0 else b as 0 --> this is nulish operation
    return Number(a)+Number(b);
}
let a1=10;
// let b=20;
let result1=addNumbers(null,a1);
console.log(result);