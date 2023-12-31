import { Link } from "react-router-dom"

const Pamentsuccess = () => {
  return (
    <>
    <div className="bg-slate-400 h-screen">
    <div className="grid justify-center py-8">
        <img className="pl-5 w-40 mb-4" src="https://upload.wikimedia.org/wikipedia/commons/3/33/ASTER_DM_HEALTHCARE_LOGO.jpg" alt="" />
        <div>
        <h6 className="mb-2 text-4xl font-bold text-blue-800">Thank You!</h6>
        </div>
        <div className="pr-5">
        <p className="">Click here to return to home page</p>
        </div>
        <Link to={'/'} className="border p-2 rounded-lg bg-buttonHov font-semibold text-white text-center">Home</Link>
      </div>
    </div>
    </>
  )
}

export default Pamentsuccess
