import { createSlice } from "@reduxjs/toolkit";


const initialState={
    name:"",
    email:"",
    password:"",
}



export const signupSlice=createSlice({
    name:'signup',
    initialState,
    reducers:{
       setName:(state,action)=>{
        state.name=action.payload
       },
       setEmail:(state,action)=>{
        state.email=action.payload
       },
       setPassword:(state,action)=>{
        state.password=action.payload
       },
       reset:()=>initialState,
    }
})

export const {setName,setEmail,setPassword,reset}=signupSlice.actions;
export default signupSlice.reducer;