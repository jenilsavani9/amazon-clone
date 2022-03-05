export const initialState = {
    basket: [],
    user: null,
    loader: false,
    loader_status: 0
}

export const getSubtotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: newBasket,
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'CHANGE_LOADER':
            return {
                ...state,
                loader: action.loader,
                loader_status: action.loader_status
            }
        default:
            return state;
    }
}

export default reducer;