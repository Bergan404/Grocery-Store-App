
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
            const produceIds = action.produceId;
            return {...state, produceIds: {id: action.produceId , count: 1}}
        default:
            return state;
    }

}
