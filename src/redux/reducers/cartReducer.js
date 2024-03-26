import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART
} from '../actions/cartActions';


const initialState = {
    items: [],
    total: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

            if (existingItemIndex !== -1) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += newItem.quantity;
                return {
                    ...state,
                    items: updatedItems,
                    total: state.total + (newItem.price * newItem.quantity),
                };
            } else {

                return {
                    ...state,
                    items: [...state.items, newItem],
                    total: state.total + (newItem.price * newItem.quantity),
                };
            }

        case REMOVE_FROM_CART:
            const productIdToRemove = action.payload;
            const itemToRemoveIndex = state.items.findIndex(item => item.id === productIdToRemove);

            if (itemToRemoveIndex !== -1) {
                const removedItemPrice = state.items[itemToRemoveIndex].price * state.items[itemToRemoveIndex].quantity;
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== productIdToRemove),
                    total: state.total - removedItemPrice,
                };
            } else {
                return state;
            }

        case UPDATE_CART:
            const { productId, newQuantity } = action.payload;
            const itemToUpdateIndex = state.items.findIndex(item => item.id === productId);

            if (itemToUpdateIndex !== -1) {
                const updatedItems = [...state.items];
                const oldQuantity = updatedItems[itemToUpdateIndex].quantity;
                updatedItems[itemToUpdateIndex].quantity = newQuantity;
                return {
                    ...state,
                    items: updatedItems,
                    total: state.total + ((newQuantity - oldQuantity) * updatedItems[itemToUpdateIndex].price),
                };
            } else {
                return state;
            }

        default:
            return state;
    }
};

export default cartReducer;
