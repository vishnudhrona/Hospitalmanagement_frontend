import Adminsidebar from "../Admin/components/Adminsidebar"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Adminhome = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = localStorage.getItem('token')
    console.log(accessToken,'rrrrrrrrrrrrrrrrrrrrrrrrrr');
    if(!accessToken) {
      const timeoutId = setTimeout(() => {
        navigate('/admin/adminlogin')
      },100000)
      
      return () => clearTimeout(timeoutId)
    } else {
      navigate('/admin/adminhome')
    } 
  },[navigate])

  return (
    <>
    <Adminsidebar />
    </>
  )
}

export default Adminhome
