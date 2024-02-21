import React, { useReducer, useState} from 'react';

const initialSate = {
    todos:[]
}

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            console.log('add')
            console.log(state.todos);
            //todos: [...state.todos, {id:Date.now(),text:action.payload, completed:false}];
            console.log([...state.todos, {id:Date.now(),text:action.payload, completed:false}]);
            return {
                todos: [...state.todos, {id:Date.now(),text:action.payload, completed:false}]
                
        };
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id != action.payload)
                //todos: state.todos.filter(function(todo){todo.id != action.payload})
        };
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map(todo => 
                    todo.id === action.payload ? {...todo, completed:!todo.completed}:todo
                    )
            };
        default:
            return state;
        }        
};

const TodoApp = () => {
    const[state,dispatch] = useReducer(reducer, initialSate);
    const[newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        console.log('handletodo');
        dispatch({type:'ADD_TODO', payload:newTodo});
        setNewTodo('');
    }

    return(
        <div>
            <input type="text" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} 
            placeholder='Enter a new Todo' />

            <button onClick={handleAddTodo}>Add Todo</button>

            <ul style={{listStyleType:'none'}}>
                {state.todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed}
                        onChange={()=> dispatch({type:'TOGGLE_TODO', payload:todo.id})}
                        />
                        <span style={{textDecoration:todo.completed ?'line-through' : 'none'}}>{todo.text}</span>
                        <button onClick={()=>dispatch({type:'REMOVE_TODO',payload: todo.id})}>Remove TODO</button>

                    </li>
                ))}
            </ul>
        </div>
        );
    };





export default TodoApp;

function TodoApp1(){

}