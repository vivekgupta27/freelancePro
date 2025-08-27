import { createSlice} from "@reduxjs/toolkit";


const initialState={
    email:"",
    password:"",
}

export const signinSlice=createSlice({
    name:'signin',
    initialState,
    reducers:{
        setEmail:(state,action)=>{
            state.email=action.payload
        },
        setPassword:(state,action)=>{
            state.password=action.payload
        },
       
        reset:()=>initialState,
    }
})

export const {setEmail,setPassword,reset}=signinSlice.actions
export default signinSlice.reducer