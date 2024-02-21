var num_arr1 = [1,2,3];
var num_arr2 = [4,5,6];

var x = 1;
var y = 2;
var combined_arr = [...num_arr1, ...num_arr2];

console.log(combined_arr);

console.log(Math.max(...num_arr1));

function sum(a,b,c){
    return a + b +c;
}
num = [1,2,3];
console.log(sum(...num));

//object spreading
const orignalObj1 = {a:1, b:2};
const orignalObj2 = {c:1, d:2};
const copiedObj = {...orignalObj1, ...orignalObj2, a:5};

console.log(copiedObj)