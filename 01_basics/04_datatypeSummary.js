//Symbol is used to provide unquiness to the defined values

const number = Symbol('1234');
const bigNumber = Symbol('1234');

console.log(number == bigNumber); //false
console.log(number === bigNumber);

//declaring bigInt
const badaNumber = 1234567899000n;
console.log(typeof badaNumber);
//primitve datatypes : bb ss nn u

//Non-primitive(Reference type) : Array, Objects, function

const realHeroes = ['Bose', 'Bhagat Singh', 'Sukhdev', 'Chandrashekar Azad'];

console.log(realHeroes);


const fullName = {
    name: 'Vikaskumar',
    lastName: 'Gupta'
};

console.log(fullName);

const myFunction = function(){
    console.log("Hello Vikaskumar here !!");
}

myFunction();

console.log(typeof fullName);