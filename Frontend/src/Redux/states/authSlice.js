import { creatSlice} from "@reduxjs/toolkit";


const initialState={
    user:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setIsLoading:(state,action)=>{
            state.isLoading=action.payload
        },
    }
})