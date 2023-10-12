
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Slotselector from './Slotselector';


const Bookingpage = () => {
    // const [selectedDate, setSelectedDate] = useState(null)
    // const datepickerRef = useRef(null)
    // const handleDateChange = (date) => {
    //     setSelectedDate(date)
    // };

    // const handleIconClick = () => {
    //     if (datepickerRef.current) {
    //       datepickerRef.current.input.focus();
    //     }
    //   };

  return (
    <>
      <div className="bg-gray-500 w-full h-11 flex">
        <a href="/"><img
          className="h-10 object-cover pl-2"
          src="https://www.one-aster.com/themes/images/aster_Logo.png"
          alt=""
        /></a>
        <h1 className="text-white mx-auto pt-1 font-bold text-2xl">
          Book an Appointment
        </h1>
      </div>
      <div className="bg-gray-300 w-full h-screen p-5 ">
        <div className="h-10 w-full bg-white flex">
          <p className="text-sm p-2 font-semibold  text-blue-700">
            Available Time
          </p>
          {/* <div className='ml-auto pr-20'>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
            className="w-21 px-4 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
          </div> */}
        </div>
        <div className="h-80 w-full bg-white mt-3 p-5">
            <img className='absolute' src="https://www.staples.com/sbd/cre/products/220929/kcfep859/images/phone_coffee.svg" alt="" />
            <div className='flex pl-40'>
            <ul className='pl-5'>
              <li>name</li>
              <li>specialities</li>
              <li>place</li>
              <li>Fee</li>
            </ul>
            <div className='ml-auto'>
            <Slotselector />
            </div>
            </div>
            
        
      </div>
      </div>
      
    </>
  );
};

export default Bookingpage;
