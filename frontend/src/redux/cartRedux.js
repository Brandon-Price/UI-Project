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
            const prodID = action.payload._id;

            if (state.quantity > 0) {
                state.quantity -= 1;
            }

            state.total -= action.payload.price * action.payload.quantity;
            state.products = state.products.filter(item => item._id !== prodID);
        },
        toRemoveAll:(state, action) =>{
            const { id } = action.payload;
            state.quantity = 0;
            state.products = state.products.filter(item => item.id !== id);
            state.total = 0;
        },
    },
});

export const {addProduct, toRemove, toRemoveAll} = cartSlice.actions;
export default cartSlice.reducer;