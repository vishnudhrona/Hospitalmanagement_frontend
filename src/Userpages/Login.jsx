import Footer from '../User/components/Footer'
import Navbar from '../User/components/Navbar'
import Userlogin from '../User/components/Userlogin'

const Login = () => {
  return (
    <div>
        <Navbar />
        <div className='py-6'> 
        <Userlogin /> 
        </div>
        <Footer />
    </div>
  )
}

export default Login