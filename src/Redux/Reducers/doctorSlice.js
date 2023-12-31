import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
    name : 'doctorId',
    initialState : { doctorId : null },
    reducers : {
        doctorId(state, action){
            state.doctorId = action.payload
        },
    }
})

export const { doctorId } = doctorSlice.actions
export default doctorSlice.reducer