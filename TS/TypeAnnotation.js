var counter;
counter = 1;
//counter = "1";
var active = true;
//arrays
var name1 = ['a', 'b', 'c'];
//object type
var person1;
person1 = {
    name: 'abc',
    age: 23
};
//union type
var result;
result = "1";
result = 1;
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
}
console.log(add("1", "2"));
