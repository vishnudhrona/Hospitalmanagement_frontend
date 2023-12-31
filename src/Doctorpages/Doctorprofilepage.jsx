import Doctornav from "../Doctor/components/Doctornav"
import Doctorprofile from "../Doctor/components/Doctorprofile"
// import Doctorsidebar from "../Doctor/components/Doctorsidebar"

const Doctorprofilepage = () => {
  return (
    <>
    {/* <Doctorsidebar /> */}
    <Doctornav />
    <div className="py-24 pl-32">
    <Doctorprofile />
    </div>
    
      
    </>
  )
}

export default Doctorprofilepage
