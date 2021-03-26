import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return {
                ...state,
                loading: true
            }
        }
        case 'ADDED_TO_CART_SUCCESS': {
            return {
                ...state,
                loading: false,
                cartQuantity: state.cartQuantity + action.payload
            }
        }
        case 'ADDED_TO_CART_FAILURE': {
            return {
                ...state,
                loading: false
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;