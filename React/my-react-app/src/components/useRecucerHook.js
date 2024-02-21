import React, {useReducer} from 'react';


const initialSate = {
    todos:[]
}

//Reducer Function
const counterReducer = (state1, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count:state1.count+1}
        case 'DECREMENT':
            return {count:state1.count-1};
        default:
            return state1;
    }

};

//Recucer Function
/*const counterReducer1 = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                todos:[...state.todos,{id:Date.now(), text:action.payload, completed:false}]
            }
        case 'TOGGLE_TODO':
            return {count:state.count-1};
        default:
            return state1;
    }

};*/

const UseReducerHook = () => {
    const[state, dispatch] = useReducer(counterReducer,{count:0} );

    return(
        <div>
            <h2>Use Reducer</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button>
        </div>
    )

   
}

export default UseReducerHook;