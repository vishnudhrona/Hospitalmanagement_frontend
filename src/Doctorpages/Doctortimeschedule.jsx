import Doctorsidebar from '../Doctor/components/Doctorsidebar'
import Timescheduletable from '../Doctor/components/Timescheduletable'

const Doctortimeschedule = () => {
  return (
    <>
    <div className='flex justify-center'>
    <Doctorsidebar />
    <div className="py-16 pl-64 h-screen">
    <Timescheduletable />
    </div>
    </div>
    
    </>
  )
}

export default Doctortimeschedule
