import instance from "../../Axios/Axios";
import { useEffect, useState } from "react";



const Doctors = () => {

  const [doctorDetails, setDoctorDetails] = useState([])
  const [doctorImage, setDoctorImage] = useState([])
  console.log(doctorDetails,'xxxxxxxxxxxxxxxxwwwww');
  console.log(doctorImage,'imageeeee');

  useEffect(() => {
    instance.get(`/landingpagefetchDoctors`).then((doctors) => {
      console.log(doctors,'i got doctors');
      setDoctorDetails(doctors.data.doctorsDetails.details)
      setDoctorImage(doctors.data.doctorsDetails.image)
    })
  }, [])


  return (
    <>
      <div className="bg-blue-200 p-5">
        <div className="container-fluid mx-auto p-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
        Our Doctors
          </h1>
          <p className="text-xs text-blue-900">
          We have some of the best specialty doctors from around the world, they bring years of experience and offer evidence based treatment 
          </p>
          <p className="text-xs text-blue-900 ">to ensure the best care for you.</p>
          <div className='flex py-5 gap-4 '>
          {doctorDetails.map((doctor, index) => (
            <>
            <div key={index} className=" w-60 border border-slate-400 rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={doctorImage[index]}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blue-900">{doctor.firstname} {doctor.lastname}</div>
              <p className="text-blue-900 text-base">
              Senior Consultant & Head of Neurosurgery
              </p>
            </div>
          </div>
          </>
          ))}
          </div>
          
          
        </div>
      </div>
    </>
  );
}

export default Doctors
