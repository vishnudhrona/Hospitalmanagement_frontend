import { Route, Routes } from "react-router-dom"
import Adminlogin from "../Admin/components/Adminlogin"
import Adminhome from "../Adminpages/Adminhome"
import Usermanagement from "../Adminpages/Usermanagement"
import Doctormanagement from "../Adminpages/Doctormanagement"

const Adminrouter = () => {
  return (
    <>
    <Routes>
      <Route path="/adminlogin" element = {<Adminlogin />} />
      <Route path="/adminhome" element = {<Adminhome />} />
      <Route path="/usermanagement" element = {<Usermanagement />} />
      <Route path="/doctormanagement" element = {<Doctormanagement />} />
    </Routes>
    </>
  )
}

export default Adminrouter
