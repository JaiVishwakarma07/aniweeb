import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            console.log(state)
            console.log(action);
            // state.quantity += 1;
            // state.products.push(action.payload);
            // state.total += action.payload.price;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
