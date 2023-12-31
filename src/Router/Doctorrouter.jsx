import { Route, Routes } from "react-router-dom"
import Doctorsignup from '../Doctor/components/Doctorsignup' 
import Doctorotplogin from '../Doctor/components/Doctorotplogin'
import Doctorlogin from '../Doctor/components/Doctorlogin'
import Doctorhome from "../Doctorpages/Doctorhome"
import Doctorprofilepage from "../Doctorpages/Doctorprofilepage"
import Doctorprofileedit from "../Doctorpages/Doctorprofileedit"
import Doctortimeschedule from "../Doctorpages/Doctortimeschedule"
import Bookingdetails from "../Doctorpages/Bookingdetails"
import Videcall from "../Doctor/components/Videcall"
import Remoteuservideocall from "../Doctor/components/Remoteuservideocall"

const Doctorrouter = () => {
  return (
    <>
      <Routes>
        <Route path="/doctorsignup" element = {<Doctorsignup />} />
        <Route path="/docotpverification/:number" element = {<Doctorotplogin />} />
        <Route path="/doctorlogin" element = {<Doctorlogin />} />
        <Route path="/doctorhome" element = {<Doctorhome />} />
        <Route path="/doctorprofile" element = {<Doctorprofilepage />} />
        <Route path="/doctoraddprofile" element = {<Doctorprofileedit />} />
        <Route path="/scheduletime" element = {<Doctortimeschedule />} />
        <Route path="/patientbookingdetails" element = {<Bookingdetails />} />
        <Route path="/videocall" element = {<Videcall />} />
        <Route path="/remoteuservideo" element = {<Remoteuservideocall />} />
      </Routes>
    </>
  )
}

export default Doctorrouter
