import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        proj:[],
    },
    reducers:{
        login1:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
        addproj:(state,action)=>{
          state.proj.push(action.payload);
        },
        removeproj:(state,action)=>{
          state.proj = state.proj.filter((p,i)=>i!==action.payload)
        },
    }  
})
export const {login1,logout,addproj,removeproj}=userSlice.actions;

export const selectUser =(state)=>state.user.user;
export const getproj =(state)=>state.user.proj;

export default userSlice.reducer;