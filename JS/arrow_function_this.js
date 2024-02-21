const { subscribe } = require("diagnostics_channel");

var obj = {
    id:1,
    counter: function counter(){
        setTimeout(function(){
            //this.id++;
            console.log(this.id)
        }.bind(this),1000)
    }
}

obj.counter();

//with arrow
var obj1 = {
    id:1,
    counter: function counter(){
        setTimeout(() =>{
            this.id++;
            console.log(this.id)
        },1000)
    }
}

obj1.counter();

/*subscribe({
    next:data=>this.product = data
})*/
