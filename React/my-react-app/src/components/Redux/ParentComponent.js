import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import store from "./store";
import { Provider} from "react-redux";
import React from "react";
import ProductList from "./productList";

const ParentComponent = () =>{
    return(
        <Provider store={store}>
            <h1>Redux communication</h1>
           <ComponentA />
           <ComponentB />
           <ProductList />
        </Provider>
    )
}
export default ParentComponent;