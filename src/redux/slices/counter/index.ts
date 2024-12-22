import { createSlice } from "@reduxjs/toolkit"; 

export const counterSlice = createSlice({
    name: "counter", // Place `name` first
    initialState: 0, // Then `initialState`
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
