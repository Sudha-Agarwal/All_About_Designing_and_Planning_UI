let promise = new Promise(function(resolve,reject){
    var name='sudha';
    setTimeout(function(){
        if(name==='sudha1'){
            resolve('promise resolved');

        }
        else{
            throw new Error('failed');
        }
        
    },2000);
})

async function asynFunc(){
    try{
        let result = await promise;
        console.log(result);

    }
    catch(error){
        console.log(error);
    }
   
   

}

asynFunc();