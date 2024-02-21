let counter:number;
counter = 1;
//counter = "1";

let active:boolean = true;

//arrays
let name1:string[] = ['a','b','c'];

//object type
let person1:{
    name:string;
    age:number
}

person1 = {
    name:'abc',
    age:23
}

//union type
let result : number  | string;
result="1";
result = 1;

function add(a:number | string, b:number | string) : number | string | undefined{
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    else if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
}

console.log(add("1","2"));

export{}

