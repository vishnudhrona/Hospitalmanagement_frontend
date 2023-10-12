import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landingpage from "./Userpages/Landingpage"
import Bookappointment from "./Userpages/Bookappointment"
import Slotbooking from "./Userpages/Slotbooking"
import Doctorsignup from "./Doctor/components/Doctorsignup"
import Doctorotplogin from "./Doctor/components/Doctorotplogin"
import Doctorlogin from "./Doctor/components/Doctorlogin"
import Doctorhome from "./Doctor/components/Doctorhome"
import Adminlogin from "./Admin/components/Adminlogin"
import Login from "./Userpages/Login"
import Signup from "./Userpages/Signup"
import Dropdownmenu from "./User/components/Dropdownmenu"
import Forgotpasswordnumber from "./Userpages/Forgotpasswordnumber"
import Forgotpasswordconfirmation from "./Userpages/Forgotpasswordconfirmation"
import Adminhome from "./Adminpages/Adminhome"
import Usermanagement from "./Adminpages/Usermanagement"
import Otpverification from "./Userpages/Otpverification"
import Doctormanagement from "./Adminpages/Doctormanagement"

// import Adminlogin from "./Admin/Adminlogin"
// import Doctorlogin from "./Doctor/components/Doctorlogin"
// import Doctorsignup from "./Doctor/components/Doctorsignup"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Landingpage />} />
      <Route path="/signup" element = {<Signup />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/bookappointment" element = {<Bookappointment />} />
      <Route path="/timeslot" element = {<Slotbooking />} />
      <Route path='/otpverification/:number' element = {<Otpverification />} />
      <Route path="/userforgotpassword" element = {<Forgotpasswordnumber />} />
      <Route path="/userforgotpasswordconfirm/:userNumber" element = {<Forgotpasswordconfirmation />} />
      <Route path='/doctors/doctorsignup' element = {<Doctorsignup />} />
      <Route path='/doctors/docotpverification/:number' element = {<Doctorotplogin />} />
      <Route path='/doctors/doctorlogin' element = {<Doctorlogin />} />
      <Route path="/doctors/doctorhome" element = {<Doctorhome />} />
      <Route path="/admin/adminlogin" element = {<Adminlogin />} />
      <Route path="/admin/adminhome" element = {<Adminhome />} />
      <Route path="/admin/usermanagement" element = {<Usermanagement />} />
      <Route path="/admin/doctormanagement" element = {<Doctormanagement />} />
      <Route path="/dropdown" element = {<Dropdownmenu />} />
    </Routes>
    </BrowserRouter>
    {/* <Doctorlogin /> */}
    {/* <Doctorsignup /> */}
    {/* <Adminlogin /> */}
    </>
  )
}

export default App
