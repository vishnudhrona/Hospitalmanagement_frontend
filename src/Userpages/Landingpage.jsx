import Navbar from '../User/components/Navbar'
import Specialities from '../User/components/Specialities'
import Doctors from '../User/components/Doctors'
import Footer from '../User/components/Footer'
import Banner from '../User/components/Banner'

const Landingpage = () => {

  return (
    <div>
      <Navbar />
      <Banner />
      <Specialities />
      <Doctors />
      <Footer />
    </div>
  )
}

export default Landingpage
