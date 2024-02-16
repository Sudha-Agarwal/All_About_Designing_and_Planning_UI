import React, {useEffect, useState} from "react";

const UseEffectHook = () => {
    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log('Initial render');
        return() => {
            console.log('component will unmount');
        }
    },[]);//empty dependency array means this effect runs only once after the initial render

    useEffect(() => {
        console.log("count has changed: " + count)
    },[count]);

    return(
        <>
        <h2>Use Effect Hook</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+1)}>Increment</button>
        </>

    )
}

export default UseEffectHook;