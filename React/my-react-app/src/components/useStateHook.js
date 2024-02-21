import React,{useState} from "react";

const UseStateHook = () => {
    //var count=0;
    const [count, setCount] = useState(0); //array destructuring
    const[count1, setCount1] = useState(0);  
  
    const handleIncrement = () => {
        //count++;
        setCount(count+1);
        setCount1(count1+1);
    }
    return(
        <div>
            <h2>Counter (Use State)</h2>
            <p>Count: {count}</p>
            <p>Count: {count1}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )

}

//or
function UseStateHook1(){

}

export default UseStateHook;