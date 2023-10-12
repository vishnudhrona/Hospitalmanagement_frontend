import { useEffect, useState } from 'react';
import instance from '../../Axios/Axios'


const Doctortable = () => {

  const [doctors, setDoctors] = useState([])
//   const [blockedStatus, setBlockedStatus] = useState([])
  const [approvalStatus, setApprovalStatus] = useState({})
  
  console.log(approvalStatus,'tyutytuuuuuuzzzzzz');


  useEffect(() => {
    instance.get('/admin/doctormanagement').then((doctors) => {
      console.log(doctors,'mkomkomkomkomkoooooooooo');
      setDoctors(doctors.data.doctors)
    //   if(Object.keys(approvalStatus).length === 0) {
    //     // setBlockedStatus(new Array(doctors.data.users.length).fill(false));
    //     const initialStatus = doctors.data.doctors.reduce((acc, doctor) => {
    //         acc[doctor._id] = null;
    //         return acc;
    //       }, {});
    //       setApprovalStatus(initialStatus);
    //       console.log(initialStatus,'nuuuuuuuuuuuunnnnuuuuu');
    //   }

    })
  },[approvalStatus])
 
 const approve = (doctorId) => {
    instance.get(`/admin/doctorapproval?doctorId=${doctorId}`).then((status) => {
        console.log(status.data.status,'i got approval status');
        setApprovalStatus(( prevStatus ) => ({
            ...prevStatus,
            [doctorId] : status.data.status
        }))
    })
 }

 const Inerdict = (doctorId) => {
    instance.get(`/admin/doctorinterdict?doctorId=${doctorId}`).then((status) => {
        console.log(status,'i got interdict response')
        setApprovalStatus(( prevStatus ) => ({
            ...prevStatus,
            [doctorId] : status.data.status
        }))
    })
}


  
  
  

  return (
    <>
      <div className="flex items-center justify-center">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Firstname
              </th>
              <th scope="col" className="px-6 py-3">
                Last name
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={doctor._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {doctor.firstname}
                </th>
                <td className="px-6 py-4">
                    {doctor.lastname}
                    </td>
                <td className="px-6 py-4">
                    {doctor.department}
                    </td>
                <td className="px-6 py-4">
                    {doctor.number}
                    </td>
                <td className={`px-6 py-4 ${approvalStatus[doctor._id] === 'Approved' ? 'text-green-400' : 'text-red-600'}`}>
                    {doctor.signupStatus}
                    </td>
                <td className="px-6 py-4">
                    <button
                      className="font-medium text-green-400 dark:text-blue-500 hover:underline"
                      onClick={() => approve(doctor._id)}
                    >
                      Approve/
                    </button>

                    <button
                      className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                      onClick={() => Inerdict(doctor._id)}
                    >
                      Inerdict
                    </button>
                    
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Doctortable
