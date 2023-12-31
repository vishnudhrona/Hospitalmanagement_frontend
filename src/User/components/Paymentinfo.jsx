import { useLocation } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Axios/Axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Razorpay from 'razorpay';


const Paymentinfo = () => {

    const navigate = useNavigate()
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const doctorId = searchParams.get('doctorId')
    const dateId = searchParams.get('dateId')

    console.log(dateId,'fuckersssssss');

    const accessToken = localStorage.getItem('token')
    const decode = jwt_decode(accessToken)
    const userId = decode.userId

    const [doctor, setDoctor] = useState('')
    const [user, setUser] = useState('')
    const [timeSchedule, setTimeSchedule] = useState('')
    const [date, setDate] = useState('')
    const [fee, setFee] = useState(100)
    const [bookings, setBookings] = useState('')

    console.log(timeSchedule,'nnnnnnnnnuuuuuuuunnnnnnuuuuuuu');
    
    let doctorFee = parseInt(doctor.fee)
    
    const totalAmount = doctorFee + fee
    console.log(totalAmount ,'jjjjjjjjjjj');
    
    console.log(userId,'bbbbbbbbb');

    useEffect(() => {
        instance.get(`/fetchpaymentdetails?docId=${doctorId}&userId=${userId}&dateId=${dateId}`).then((response) => {
            console.log(response,'got booked date');
            setDoctor(response.data.response.doctorProfile)
            setUser(response.data.response.user)
            setTimeSchedule(response.data.response.bookedSlot)
            setDate(response.data.response.bookedDate)
        })
    },[doctorId, userId, dateId])

    const payment = () => {
        instance.post('/userpayment',{totalAmount,user,doctor,date,timeSchedule}).then((response) => {
            setBookings(response.data.order)
            console.log(response.data.order.id,'vvvvvvvvcccccccccrrrrrrr');
        })
    }

    useEffect(() => {
        if(bookings) {
            try {
                console.log(bookings,'haossssssssssss');
                var options = {
                    "key": "rzp_test_gFSzKrbiJVMqDa", // Enter the Key ID generated from the Dashboard
                    "amount": bookings.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": "Vishnu Dhrona",
                    "description": "Test Transaction",
                    "image": "https://example.com/your_logo",
                    "order_id": bookings.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                    "handler": function (response) {
                        console.log(response,'razzzzzzzzzzzzzzzzz');
                        paymentVerification(response,bookings)
                    },
                    "prefill": {
                        "name": "Gaurav Kumar",
                        "email": "gaurav.kumar@example.com",
                        "contact": "9999999999"
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#3399cc"
                    }
                };
                 console.log(bookings,'eeeeennnnddddddddd');
                 var rzp1 = new window.Razorpay(options);
                 rzp1.open();
            } catch(err) {
                console.log(err,'raaazzzerrr');
            }
            
        }
               
              },[bookings])

                let paymentVerification = (res, order) => {
                    instance.post('/verifypayment', { res, order }).then((response) => {

                        if(response.data.response.status) {
                            toast.success('Payment verified successfully');
                            navigate('/paymentsuccess')
                        } else {
                            toast.error('Payment verification failed');
                        }
                    }).catch((error) => {
                        toast.error(error,'An error occurred during payment verification');
                    })
                  }
              
                
          


  return (
    <>
      <div className="flex justify-center py-5">
        <ToastContainer />
        <div className="w-5/6 h-screen bg-slate-100">
          <h6 className="flex justify-center text-blue-800 font-semibold py-4">
            Review Appointment Details
          </h6>
          <div className="grid grid-cols-2 px-36 mt-10">
            <div className="grid justify-center">
              <span className="text-blue-800 font-semibold">
                Doctor Details
              </span>
              {doctor && (
                <div className="flex gap-2 mt-2">
                
                <div className="grid">
                  <span className="text-xs font-medium">
                    Name : {doctor.firstname} {doctor.lastname}
                  </span>
                  <span className="text-xs font-medium">Department : {doctor.department}</span>
                  <span className="font-medium mt-2 text-blue-800">
                    Location
                  </span>
                  <span className="text-xs font-medium">
                    Mini By-pass Road, Govindapuram{" "}
                  </span>
                  <span className="text-xs font-medium">
                    P.O.Calicut - 673 016, Calicut, Kerala,{" "}
                  </span>
                  <span className="text-xs font-medium">673016, India</span>
                </div>
              </div>
              )}
              
            </div>

           {user && timeSchedule && date && (
             <div className="justify-center">
             <span className="text-blue-800 font-semibold">
               Patient Details
             </span>
             <div className="flex gap-2 mt-2">
               <div className="grid">
                 <span className="text-xs font-medium">
                   {user.patientfirstname} {user.lastName}
                 </span>
                 <span className="text-xs font-medium">{user.number}</span>
                 <span className="font-medium mt-2 text-blue-800">
                   Booking Time
                 </span>
                 <span className=" text-xs font-medium">
                    {date.dateObject}
                 </span>
                 <span className=" text-xs font-medium">{timeSchedule.slotTime}</span>
               </div>
             </div>
           </div>
           )}
          </div>
          <hr className="border-t w-full border-gray-400 mt-5 mb-5" />
          <div className="grid justify-end pr-10">
            {doctor && (
                <div className="font-semibold text-sm ">
              <span className="px-5">Consultation Fee</span>
              <span>INR {doctor.fee}</span>
            </div>
            )}
            <div className="font-semibold text-sm ">
              <span className="px-6">Registration Fee</span>
              <span>INR 100</span>
            <hr className="border-t w-full border-gray-400 mt-3" />
            </div>
                <div className="font-semibold text-sm">
                    <span className="px-8">Total Amount</span>
                    <span>INR {totalAmount}</span>
                </div>
          </div>
          <div className="flex justify-center mt-5">
          <button 
           className="bg-blue-900 rounded-md w-5/6 text-white p-1"
           onClick={payment}
          >
            Pay Now
        </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentinfo;
