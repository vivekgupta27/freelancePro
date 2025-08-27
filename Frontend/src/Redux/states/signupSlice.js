import { createSlice } from "@reduxjs/toolkit";


const initialState={
    name:"",
    email:"",
    password:"",
    change:false,
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
       setChange:(state,action)=>{
        state.change=action.payload
        console.log(state.change);
       },
       reset:()=>initialState,
    }
})

export const {setName,setEmail,setPassword,setChange,reset}=signupSlice.actions;
export default signupSlice.reducer;