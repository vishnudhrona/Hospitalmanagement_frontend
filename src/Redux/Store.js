import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import PatientSlice from "./Reducers/PatientSlice";
import doctorSlice from "./Reducers/doctorSlice";

// const patientPersistConfig = {
//     key : 'patientData',
//     storage
// }

const doctorPersistConfig = {
    key : 'doctorData',
    storage
}

// const persistPatientReducer = persistReducer(patientPersistConfig, PatientSlice)
const persistDoctorReducer = persistReducer(doctorPersistConfig, doctorSlice,
    {
        serialize : (data) => {
            return JSON.stringify(data)
        }
    })

const store = configureStore({
    reducer : {
        patientData : PatientSlice,
        doctorData : persistDoctorReducer
    }
})

export const persistor = persistStore(store)
export default store