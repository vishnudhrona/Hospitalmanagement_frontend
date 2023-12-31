import { useDispatch } from "react-redux";
import { closingSlot } from "../../Redux/Reducers/PatientSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'
import instance from "../../Axios/Axios";
import { Link, useNavigate } from "react-router-dom";


const Slots = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [doctor, setDoctor] = useState(null)
  const [timeSchedule, setTimeSchedule] = useState(null)
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [slotTime, setSlotTime] = useState(null)
  const [bookings, setBookings] = useState('')

  console.log(slotTime,'benelliiiiiiii');
  console.log(bookings.status,'bhugattiiiiiiiiii');
  console.log(timeSchedule,'gggggtttttttttrrrrrr');

  let bookedDate = ''
  timeSchedule && (
    bookedDate = timeSchedule._id
  )

  console.log(bookedDate,'vvvttttrrrrrrrrrrr');


 let docId = ''
  doctor && doctor.doctor && (
    docId = doctor.doctor._id
    )  

  selectedTimes.map((time) => {
    console.log(time.hours+':'+time.minutes+ ' '+time.amPm,'whoooooooooooo');
  })

  useEffect(() => {
    if(timeSchedule) {
      let slots = timeSchedule.slots
      let timeFrom = timeSchedule.timeFromObject
      let timeTo = timeSchedule.timeToObject

      const startTime = new Date(`2000-01-01 ${timeFrom}`);
      const endTime = new Date(`2000-01-01 ${timeTo}`);

      const timeDiffMillis = endTime - startTime;
      const intervalMillis = timeDiffMillis / slots;

      const updatedSelectedTimes = []; // Create a new array


      console.log(intervalMillis,'jjjjjjjjjjjjjjjjjjj');

      for (let i = 1; i <= slots; i++) {
        const newTime = new Date(startTime.getTime() + i * intervalMillis);
        console.log(newTime,'i got new time');
        let hours = newTime.getHours().toString().padStart(2, '0');
        const minutes = newTime.getMinutes().toString().padStart(2, '0');
        const amPM = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        console.log(`${hours}:${minutes} ${amPM} IST`);
          // ... your time calculation logic
      
          const slotTime = {
            hours: hours,
            minutes: minutes,
            amPm: amPM
          };

          updatedSelectedTimes.push(slotTime);
          
        }
        setSelectedTimes(updatedSelectedTimes);

    }
  },[timeSchedule])
     
   

  const handleSlots = () => {
    dispatch(closingSlot(false))
  }

  const handleTimeSelection = (slotTime) => {
    setSlotTime(slotTime)
  }

  const timeDetails = useSelector((state) => state.patientData.timeSlot)
  console.log(timeDetails,'vvvvvvvv');

  useEffect(() => {
    instance.get(`/timeslots?timeId=${timeDetails}`).then((response) => {
      setDoctor(response.data)
      setTimeSchedule(response.data.timeSchedule)
      console.log(response,'tttttttttteeeeeeeeeaaaaa');
    })
  },[timeDetails]) 

  // let patientId = useSelector((state) => state.patientData.patientId)
let accessToken = localStorage.getItem('token')
const decode = jwt_decode(accessToken)
const patientId = decode.userId

  console.log(patientId,'qqqqqqqqpppppppPPPP');

  let bookingSlot = () => {
    instance.post('/userbookingslots',{slotTime,docId,patientId}).then((response) => {
      console.log(response.data.status,'i got slot response');
      if(response.data.status) {
        setBookings(response.data)
      } else {
        setBookings(response.data.response)
        navigate(`/paymentinfo?doctorId=${docId}&dateId=${bookedDate}`)
      }

    })
  }

  return (
    <>
      <div className="slots-overlay w-[700px] h-auto bg-slate-100 rounded-lg">
        <div className="h-10 bg-slot flex justify-between items-center">
          <span className="text-white px-2 font-semibold">Select Slot</span>
          <button 
          className=" text-white px-3"
          onClick={handleSlots}
          >
            X
          </button>
        </div>

      {doctor && doctor.imageUrl && (
        <div className="px-5 py-3">
          <span className="">{doctor.department}</span>
          <div className="flex">
            <img
              className="w-10 h-10 mt-2 rounded-full"
              src={doctor.imageUrl}
              alt="Rounded avatar"
            />
            <div className="grid py-2 px-2">
              <span className="text-sm font-medium text-slot">
                {doctor.doctor.firstname} {doctor.doctor.lastname}
              </span>
              <span className="text-lg text-slate-500">
                {doctor.doctor.degree}
              </span>
            </div>
          </div>
        </div>
      )}
        


        <hr className="border-t border-gray-300" />
        {bookings.status==true ? (
          <h6 className="flex justify-center text-red-700 font-bold">{bookings.message} You want to book another slot please cancel previous booking</h6>
        ) : (
          <div>

          {timeSchedule && doctor &&  doctor.doctor && (
            <div className="py-2 px-5 grid grid-rows-2">
              <span className="text-slate-600 font-medium">Please pick an available slot</span>
              <div className="flex justify-between py-2">
              <span className="text-lg text-slate-600">Consulting Time - {timeSchedule.timeFromObject} to {timeSchedule.timeToObject}</span>
              <span className="text-lg text-slot">INR {doctor.doctor.fee}</span>
          </div>
          </div>
          )}
          
          <hr className="border-t border-gray-300" />
          <div className="flex px-5 py-3">
            <div className="grid grid-cols-9 gap-2">
            {timeSchedule && (
              <>
                <button 
                className="bg-slate-200 text-slate-500 rounded-md text-xs p-1 hover:bg-slate-400"
                onClick={() => handleTimeSelection(timeSchedule.timeFromObject)}
                >
                  {timeSchedule.timeFromObject}
                  </button>
                  </>
            )}
          {selectedTimes.map((slotTime, index) => (
            <>
            <button 
            className="bg-slate-200 text-slate-500 rounded-md text-xs p-1 hover:bg-slate-400" key={index}
            onClick={() => handleTimeSelection(`${slotTime.hours}:${slotTime.minutes} ${slotTime.amPm}`)}
            >
              {slotTime.hours} : {slotTime.minutes} {slotTime.amPm}
            </button>
        </>
          ))}
            </div>
          </div>
  
  
          </div>
        )}
       

        
        <hr className="border-t border-gray-300" />
        <div className="py-5 flex justify-center ">
        <Link
        className="bg-slotButton flex justify-center w-5/6 rounded-md p-1 text-white hover:bg-green-400"
        onClick={bookingSlot}
        >
          Reserve Slot
        </Link>
        </div>
      </div>
        {/* Horizontal line for the underline */}
        
    </>
  );
};

export default Slots;
