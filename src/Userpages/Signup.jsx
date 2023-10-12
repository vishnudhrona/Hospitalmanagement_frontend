import Footer from "../User/components/Footer"
import Navbar from "../User/components/Navbar"
import Usersignup from "../User/components/Usersignup"

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="py-6">
      <Usersignup />
      </div>
      <Footer />
    </div>
  )
}

export default Signup
