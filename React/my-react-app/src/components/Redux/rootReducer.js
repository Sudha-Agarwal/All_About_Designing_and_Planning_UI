const initialSate = {
    value:0
}

const rootReducer = (state=initialSate,action) => {
    switch(action.type){
        case 'UPDATE_VALUE':
            return {
                ...state, value: action.payload
            };
            default:
                return state;
    }
}

export default rootReducer;