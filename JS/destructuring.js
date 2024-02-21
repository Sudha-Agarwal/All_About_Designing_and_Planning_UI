const person = {
    firstName:'Sudha',
    lastName:'Agarwal'
}

//destructuring
const { firstName, lastName, age=23} = person;

console.log(firstName);
console.log(lastName);
console.log(age)

//without destructuring
const firstName1 = person.firstName;
console.log(firstName1);

