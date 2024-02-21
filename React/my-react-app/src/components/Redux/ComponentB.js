import { useSelector } from "react-redux"

const ComponentB = ()=>{
    const storevalue = useSelector(state=> state.root.value);

    return(
        <div>
            <h2>Component B</h2>
            <p>Recieved from store: {storevalue}</p>
        </div>
    )

}

export default ComponentB;