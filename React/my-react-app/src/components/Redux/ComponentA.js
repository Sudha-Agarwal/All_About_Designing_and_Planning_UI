import { useState } from "react";
import {useDispatch} from 'react-redux';
import { updatevalue } from "./action";


const ComponentA = () => {
    const [newValue,setNewValue] = useState(0);

    const dispatch = useDispatch();

    const handleUpdate = ()=>{
        dispatch(updatevalue(newValue));
    }

    return(
        <div>
            <input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
            <button onClick={handleUpdate}>Update value</button>
        </div>
    )

}

export default ComponentA;