import { createSlice } from '@reduxjs/toolkit';

const initialState = {accessToken : null, patientId : null, name : null,
    sortedDoc : {
        firstname : null,
        lastname : null,
        department : null,
        number : null,
        degree : null,
        imageurl : null,
        description : null
    },
    closingSlot : true,
    timeSlot : null
}
 
const patientSlice = createSlice({
    name : 'patientstoken',
    initialState : initialState,
    reducers : {
        accessToken(state, action ) {
            localStorage.setItem('patientAccessToken', action.payload)
            state.accessToken = action.payload 
        },
    
        patientId(state, action) {
            state.patientId = action.payload
        },
    
        name(state, action) {
            state.name = action.payload
        },
        setSortedDoc(state, action) {
            state.sortedDoc = {
                ...state.sortedDoc,
                ...action.payload
            }
        },
        closingSlot(state, action) {
            state.closingSlot = action.payload
        },
        timeSlot(state, action) {
            state.timeSlot = action.payload
        }
    }
})

export const { accessToken, patientId, name, setSortedDoc, closingSlot, timeSlot } = patientSlice.actions
export default patientSlice.reducer;