function first(){
    //simulating some delay
    setTimeout(function(){
        console.log('first');
    },1000)
    //console.log('first')
}

function second(){
    console.log('second');
}

//with callback
function abc(name){
    name();

}

abc(() => console.log('second'));

//first();
//second();