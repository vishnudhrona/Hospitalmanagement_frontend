import Adminsidebar from "../Admin/components/Adminsidebar"
import Doctortable from "../Admin/components/Doctortable"

const Doctormanagement = () => {
  return (
    <div>
      <div className="">
    <Adminsidebar />
    <div className="py-16 pl-64 h-screen">
    <Doctortable />
    </div>
    </div>
    </div>
  )
}

export default Doctormanagement

