function myAsyncFunction(name){
    return new Promise(function(resolve, reject){
        //producing code
        if(name === 'Sudha'){
            resolve("Here is Sudha");
        }
        else{
            reject('Oops! This is not Sudha');
        }
    });
}
function showData(data){
    console.log(data);

}

function showError(error){
    console.log(error);

}
//consuming code
myAsyncFunction('Sudha1').then(showData).catch(showError);

//or
myAsyncFunction('Sudha1').then(function showData(data){
    console.log(data);

}
).catch(function showError(error){
    console.log(error);

});

//or
myAsyncFunction('Sudha1').then(data=>console.log(data)).catch(error => console.log(error));
