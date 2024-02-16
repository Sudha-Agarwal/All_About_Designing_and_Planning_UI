import React from "react";
const x = {id:10};
const y = () =>{

}

function abc(callback){
    callback();

}

function abc1(){

}

abc(abc1);

function sum(num1, num2){
    //no external factor like fetching the data from server
    return num1 + num2;
}


 const DisplayUserInfo = (props)=> {

    return(
        <div>
            <p>Name: {props.user.name}</p>
            <p>Email: {props.user.email}</p>
        </div>
    );
}

export default DisplayUserInfo;