import { createSlice ,PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    items: any[];
}

const cartSlice =  createSlice({
    name: "cart",
    initialState:{
        items: [],
    } as CartState,
    reducers:{
        addItem: (state, action: PayloadAction<any> ) =>{
            state.items.push(action.payload);
        },
        clearKart: (state) =>{
            state.items = [];
        },
        removeItem: (state,action) =>{
            state.items.pop();
        }
    }
});

export const {addItem,clearKart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;