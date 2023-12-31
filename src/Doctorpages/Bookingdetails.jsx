import Doctorsidebar from '../Doctor/components/Doctorsidebar'
import Doctorbookingstable from '../Doctor/components/Doctorbookingstable'

const Bookingdetails = () => {
  return (
    <>
    <div className='flex justify-center'>
    <Doctorsidebar />
    <div className="py-16 pl-64 h-screen">
    <Doctorbookingstable />
    </div>
    </div>
    </>
  )
}

export default Bookingdetails
