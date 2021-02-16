
const ADD_CART = 'cart/ADD'

export const addToCart = (id) => {
    return {
        type: ADD_CART,
        produceId: id
    }
}


export default function
cartReducer(state = {}, action) {
    switch(action.type) {
        case ADD_CART:
            return {...state, [action.produceId]: {id: action.produceId , count: 1}}
        default:
            return state;
    }

}
