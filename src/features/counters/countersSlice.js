import {createSlice} from "@reduxjs/toolkit";
import initialCounters from "../../data/initialCounters";
const countersSlice = createSlice({
    name:"counters",
    initialState:initialCounters,
    reducers: {
        increment: (state,action)=>{
            // we will get counterId from action payload
        const counterId =state.findIndex((c)=> c.id ===action.payload); 
        state[counterId].value++;   
        },
      decrement: (state,action)=>{
 const counterId =state.findIndex((c)=> c.id ===action.payload); 
        state[counterId].value--; 
      }  
    }
});
export default countersSlice.reducer;

export const {increment,decrement} = countersSlice.actions;