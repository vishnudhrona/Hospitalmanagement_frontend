import Navbar from '../User/components/Navbar'
import Sidebar from '../User/components/Sidebar'
import Doctordetails from '../User/components/Doctordetails'
import Footer from '../User/components/Footer'


const Bookappointment = () => {

  return (
    <>
    <Navbar />
    <div className="flex">
    <Sidebar />
    <Doctordetails />
    </div>
    <Footer />
    </>
   

  )
}

export default Bookappointment

