import axios from 'axios';


//action creator
export const fetchproducts = () => {
    return async (dispatch) => {
        try{
        const response = await axios.get('http://localhost:3000/products');

        dispatch({
            type:'FETCH_PRODUCTS_SUCCESS',
            payload: response.data
        });
        }
        catch(error){
            dispatch({
                type:'FETCH_PRODUCTS_FAILURE',
                payload:error.message,
            })
        }
    }
}

    
