import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loginData: [
        {id:1,name:'Burak',password:123},
        {id:2,name:'Ali',password:123},
        {id:3,name:'Veli',password:123},
        {id:4,name:'Ayşe',password:123},
        {id:5,name:'Tolga',password:123},

    ]
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{

    }
})

export default dataSlice.reducer