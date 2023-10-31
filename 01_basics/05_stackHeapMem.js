//Stack is allocated for primitive datatypes 
//it is always call be value so a copy of value is provided not exact values or memory

let numOne = 123;

let numTwo = numOne;
numOne = 345;

console.log(numOne);
console.log(numTwo);


//while Heap memeory is allocated for objects (non-primitive) reference datatype and reference of actual object values is provided so the changes will be reflected in both.

let userOne = {
    fistName : 'Vikaskumar',
    lastName: 'Gupta',
    email: 'vikas123@gmail.com',
    upiId: 'vikas@123ybl'
}

let userTwo = userOne;
userTwo.email = 'hero123@gmail.com';

console.log(userTwo.email);
console.log(userOne.email);


