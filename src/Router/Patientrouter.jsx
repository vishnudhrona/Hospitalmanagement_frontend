import { Route, Routes } from "react-router-dom"
import Landingpage from "../Userpages/Landingpage"
import Signup from "../Userpages/Signup"
import Login from "../Userpages/Login"
import Bookappointment from "../Userpages/Bookappointment"
import Slotbooking from "../Userpages/Slotbooking"
import Otpverification from "../Userpages/Otpverification"
import Forgotpasswordnumber from "../Userpages/Forgotpasswordnumber"
import Forgotpasswordconfirmation from "../Userpages/Forgotpasswordconfirmation"
import Dropdownmenu from "../User/components/Dropdownmenu"
import Paymentpage from "../Userpages/Paymentpage"
import Paymentsuccess from "../User/components/Pamentsuccess"


const Patientrouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element = {<Landingpage />} />
        <Route path="/signup" element = {<Signup />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/bookappointment" element = {<Bookappointment />} />
        <Route path="/timeslot/:doctorId" element = {<Slotbooking />} />
        <Route path="/otpverification/:number" element = {<Otpverification />} />
        <Route path="/userforgotpassword" element = {<Forgotpasswordnumber />} />
        <Route path="/userforgotpasswordconfirm/:userNumber" element = {<Forgotpasswordconfirmation />} />
        <Route path="/dropdown" element = {<Dropdownmenu />} />
        <Route path="/paymentinfo" element = {<Paymentpage />} />
        <Route path="/paymentsuccess" element = {<Paymentsuccess />} />
    </Routes>
    </>
  )
}

export default Patientrouter
