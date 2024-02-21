/*
//statement1
//statement2
//statement3 - fetching the data(delay) function fetchData(print){
    print(data)
}
print(data)
//statement4
//statement5

function print(data){
    console.log(data);

}

//In javascript functions are treated as first class citizens
//that means functions are treated as objects or values


function abc(data){
    console.log(data);
    data();//callback function call

    //fetch data from server and if available
    data();
}
var x = "Hello";
abc(x);//argument

function print(){
    console.log("function print");
}

abc(print);//this forms the basis for callback functions

//or
abc(function print(){
    console.log("function print");
});

//or
abc(function(){
    console.log("function print");
});

//
abc(() => console.log("function print"));

obj = {
    id:1,
    next: data => console.log(data)
    
}

next:(data) => console.log(data);

const sum = function(){

}

sum = 10; */


function serverRequest(callback1){
    var response;
    console.log("before set timeout")
    setTimeout(() =>{
       response  = "data from server";
       callback1(response);
    },1000);
    console.log("after set timeout")
    
}

function print(data){
    console.log(data);
}

//serverRequest(print);

//or
serverRequest(data => console.log(data));

