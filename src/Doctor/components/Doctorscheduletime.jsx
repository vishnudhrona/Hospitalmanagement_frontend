import "flowbite";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CgCalendarDates } from "react-icons/cg";
import instance from "../../Axios/Axios";
import { useSelector } from "react-redux";

const Doctorscheduletime = () => {
  const [date, setDate] = useState(new Date());
  const [timefrom, setTimefrom] = useState(new Date())
  const [timeto, setTimeto] = useState(new Date())
  const [slots, setSlots] = useState('')

 const formattedTimeFrom = timefrom.toString()
 const formattedTimeTo = timeto.toString()
 const formattedDate = date.toString()


console.log(formattedDate,'mistubhushi ciliaaaaa');

const doctorId = useSelector((state) => state.doctorData.doctorId)
console.log(doctorId,'kyaaaaaaaa heeeeyyyy');


  const handleDate = (date) => {
    setDate(date)
  };

  const handleTimefrom = (timefrom) => {
    setTimefrom(timefrom)
  }

  const handleTimeto = (timeto) => {
    setTimeto(timeto)
  }

  const handleSlots = (e) => {
    let slot = e.target.value
    setSlots(slot)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const body = {
        date,
        formattedTimeFrom,
        formattedTimeTo,
        slots,
        doctorId
      }

      console.log(body,'s 1000 rrrrrr');

      instance.post('doctors/timeschedule',body,{
        headers: {
          'Content-Type' : 'application/json'
        },
      }).then((response) => {
        console.log(response,'i got time schedule response');
        if(response) {
          console.log(response);
        } else {
          console.log('something went to wrong');
        }
      })
    } catch(err) {
      console.log(err);
    }
    
  };

  return (
    <>
      <div className="py-24">
        <div className="relative flex justify-center border p-5 bg-gray-200 w-96 h-80">
          <form onSubmit={handleSubmit}>
            <h1>Select a Date</h1>
            <div className="relative mb-5">
              <DatePicker
                selected={date}
                name="date"
                onChange={handleDate}
                // value={date}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy" // Customize the date format
              />
              <CgCalendarDates className="absolute top-1/2 left-40 mt-5 text-blue-600 transform -translate-y-8 w-6 h-6 dark:text-gray-400" />
            </div>

            {/* {selectedDate && (
              <p>You selected: {selectedDate.toLocaleDateString()}</p>
            )} */}
            <h1>Select TimeZone From:</h1>
            <div className="relative mb-5">
              <DatePicker
                selected={timefrom}
                name="timefrom"
                onChange={handleTimefrom}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                // value={timefrom}
              />
            </div>
            <h1>Select TimeZone To:</h1>
            <div className="relative">
              <DatePicker
                selected={timeto}
                name="timeto"
                onChange={handleTimeto}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                dateFormat="h:mm aa"
                // value={timeto}
              />
            </div>
            <h1>slots</h1>
            <div className="relative">
              <input 
              type="text"
              name="slots"
              onChange={handleSlots} 
              value={slots}
              />
            </div>
            <button className="pt-5 border border-blue-600" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Doctorscheduletime;
