import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },

    // If you don't know what these are look into what redux does
    // Video with a quick overview
    // https://www.youtube.com/watch?v=_shA5Xwe8_4
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        toRemove:(state, action) =>{

            if (state.quantity > 0){
                state.quantity -= 1;
            }

            state.total -= action.payload.price * action.payload.quantity;
            const { id } = action.payload;

            state.products = state.products.filter(item => item.id !== id);
        },
    },
});

export const {addProduct, toRemove} = cartSlice.actions;
export default cartSlice.reducer;