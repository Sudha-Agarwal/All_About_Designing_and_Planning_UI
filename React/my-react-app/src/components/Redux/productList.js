import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux"
import { fetchproducts } from "./productAction";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector(state=> state.products.loading);
    const error = useSelector(state=>state.products.error);

    useEffect(()=>{
        dispatch(fetchproducts());
    },[]);

    if(loading){
        return<p>Loading....</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    return(
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) =>(
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default connect(null, {fetchproducts})(ProductList);