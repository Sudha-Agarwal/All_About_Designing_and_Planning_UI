import productReducer from "./ProductReducer";
import rootReducer from "./rootReducer";
import { combineReducers, configureStore} from '@reduxjs/toolkit';


const combinedReducer = combineReducers({
    root:rootReducer,
    products:productReducer
});

const store = configureStore({
    reducer:combinedReducer
});

export default store;