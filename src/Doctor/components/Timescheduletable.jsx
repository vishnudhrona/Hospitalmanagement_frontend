import Doctorscheduletime from "./Doctorscheduletime";
import { useState, useEffect } from "react"; 
import { useSelector } from "react-redux";
import instance from '../../Axios/Axios'

const Timescheduletable = () => {

 const [showScheduleForm, setScheduleForm] = useState(false)
 const [scheduledTime, setScheduledTime] = useState([])

 console.log(scheduledTime,'vvvvvvvvvtttttttt');

//  let formattedDate = scheduledTime.map((time) => time.date.toString().split('T')[0])



 const docId = useSelector((state) => state.doctorData.doctorId)

  useEffect(() => {
    instance.get(`/doctors/fetchtimeschedule?docId=${docId}`).then((timeSchedule) => {
        console.log(timeSchedule,'nnnnnnnnnnnnqqqqqqqq');
        setScheduledTime(timeSchedule.data.timeSchedule)
    })
  },[docId])
 

  return (
    <>
        <button 
        className="border bg-blue-400 mt-5 mb-5"
        onClick={() => setScheduleForm(!showScheduleForm)}
        >
            Add Your Schedule
        </button>
        {showScheduleForm && <Doctorscheduletime />}
      <div className="flex items-center justify-center border border-gray-300">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Week Day
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time From
              </th>
              <th scope="col" className="px-6 py-3">
                Time To
              </th>
              <th scope="col" className="px-6 py-3">
                Slots
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {scheduledTime.map((time, index) => (
                <>
                <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td
                  scope="row"
                  className="px-6 py-4"
                >
                  {time.dateOfWeek}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4"
                >
                  {time.dateObject}
                </td>
                <td className="px-6 py-4">
                    {time.timeFromObject}
                    </td>
                <td className="px-6 py-4">
                    {time.timeToObject}
                    </td>
                <td className="px-6 py-4">
                    {time.slots}
                    </td>
                <td className="px-6 py-4">
                    <button
                      className="font-medium text-green-400 dark:text-blue-500 hover:underline"
                    //   onClick={() => block(user._id)}
                    >
                      Use
                    </button>
                </td>
              </tr>
              </>
            ))}
              
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Timescheduletable
