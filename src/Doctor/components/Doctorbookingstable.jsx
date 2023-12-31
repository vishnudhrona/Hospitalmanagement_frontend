import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import instance from "../../Axios/Axios";
import { Link } from "react-router-dom";

const Doctorbookingstable = () => {
  const [bookingDetails, setBookingDetails] = useState("");
  const doctorId = useSelector((state) => state.doctorData.doctorId);

  console.log(bookingDetails, "bbbbbb");
  bookingDetails &&
    bookingDetails.map((bookings) => {
      console.log(bookings.doctorDetails, "rrrrrrrrr");
    });

  useEffect(() => {
    instance
      .get(`/doctors/fetchbookingdetails?doctorId=${doctorId}`)
      .then((bookings) => {
        console.log(bookings.data.response, "zzzzeeeeee");
        setBookingDetails(bookings.data.response);
      });
  }, [doctorId]);

  return (
    <>
      <div className="flex items-center justify-center border border-gray-300">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Patient Name
              </th>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                DOB
              </th>
              <th scope="col" className="px-6 py-3">
                Booking Date
              </th>
              <th scope="col" className="px-6 py-3">
                Booking Time
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
           {bookingDetails && bookingDetails.map((bookings, index) => (
            <>
            <tbody>
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
              <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {bookings.userFirstName} {bookings.userLastName}
    </th>
    <td className="px-6 py-4">{bookings.userNumber}</td>
    <td className="px-6 py-4">{bookings.userDob}</td>
    <td className="px-6 py-4">{bookings.bookingDate}</td>
              <td className="px-6 py-4">{bookings.bookingTime}</td>
              <td className="px-6 py-4">
                <Link
                to={`/doctors/videocall?bookinguseremail=${bookings.userEmail}`} 
                className="font-medium text-red-600 dark:text-blue-500 hover:underline">
                  Video call
                </Link>
                {/* <button className="font-medium text-green-400 dark:text-blue-500 hover:underline">
                  Unblock
                </button> */}
              </td>
            </tr>
          </tbody>
          </>
           ))}
          
        </table>
      </div>
    </>
  );
};

export default Doctorbookingstable;
