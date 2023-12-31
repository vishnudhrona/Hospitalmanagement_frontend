import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../Axios/Axios";

const Forgotpasswordconfirm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    otp: "",
    password: "",
  });
  const [timer, setTimer] = useState(60)
  const [disableResend, setDisableResend] = useState(false)
  
  useEffect(() => {
    let interval;

    if(timer > 0 && disableResend) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    } else {
      clearInterval(interval)
      setDisableResend(false)
      setTimer(60)
    }

    return () => clearInterval(interval)

  }, [timer, disableResend])

  const handleResend = () => {
      const patientDetails = localStorage.getItem('newUser')
      const patientDetailsObj = JSON.parse(patientDetails)
      const number = patientDetailsObj.number
  
    setDisableResend(true)
    instance.post('/resendotp',{number})
  }

  const { userNumber } = useParams();

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      instance
        .post("/userforgotpasswordconfirm", {
          otp: formData.otp,
          password: formData.password,
          number: userNumber,
        })
        .then((data) => {
          console.log(data, "ytytytytuiuiuiui");
          if (data.data.response) {
            navigate("/");
          } else {
            setErrorMessage(data.data.error);
          }
        });

      // You can handle form submission here
    } catch (error) {
      setErrorMessage("Error occurred");
    }
  };

  return (
    <>
      <div className="bg-slate-300 w-full h-screen flex">
        <div className="bg-loginBackgroundColor h-full w-1/2 lg:ml-36">
          <div className="">
            <h1 className="pt-5 text-white text-6xl font-bold font-mono tracking-widest flex justify-end">
              HOS
            </h1>
            <div className="bg-white w-96 h-80 ml-auto mt-10 shadow-md flex justify-center items-center">
              <div className="px-20">
                <h1 className="font-bold font-mono px-14 text-xl text-loginBackgroundColor">
                  HOSPITAL
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-end"
                >
                  <input
                    className="mb-2 border-slate-300 rounded custom-input"
                    type="number"
                    name="otp"
                    placeholder="OTP"
                    value={formData.otp}
                    onChange={handleChange}
                  />
                  {disableResend ? 
                  <span>{timer}</span> : 
                  <button 
                  onClick={handleResend} 
                  className='text-xs'
                  >
                    Resend OTP
                    </button>}
                  <input
                    className="border-slate-300 rounded custom-input"
                    type="password"
                    name="password"
                    placeholder="New Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="bg-loginBackgroundColor text-white text-sm p-1 w-52 mt-4 hover:bg-hoverLogin rounded"
                  >
                    submit
                  </button>
                  {errorMessage && (
                    <div className="pt-5">
                      <div className="text-red-500">{errorMessage}</div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 h-full w-2/4 pt-5">
          <span className="text-6xl font-bold font-mono tracking-widest">
            PITAL
          </span>
          <div className="bg-loginImage w-96 h-80 mt-10 shadow-md flex justify-center items-center">
            <div className="px-20">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/021/809/795/small/doctors-day-illustration-png.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>

    // <>
    //   <div className="flex justify-center items-center">
    //     <div className="bg-gray-100 p-5 h-96 overflow-auto rounded shadow-md w-80">
    //       <h2 className="text-2xl font-semibold mb-4">Log In</h2>

    //       <form onSubmit={handleSubmit}>
    //         <div className="mb-4">
    //           <input
    //             type="number"
    //             name="otp"
    //             placeholder="OTP"
    //             className="w-full p-2 border rounded"
    //             value={formData.otp}
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div className="mb-4">
    //           <input
    //             type="password"
    //             name="password"
    //             placeholder="New Password"
    //             className="w-full p-2 border rounded"
    //             value={formData.password}
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div className="flex justify-between items-center pt-2">
    //           <button
    //             type="submit"
    //             className=" bg-buttonColor text-white p-2 text-xs hover:bg-buttonColor"
    //           >
    //             Confirm
    //           </button>
    //         </div>
    //         {errorMessage && (
    //             <div className="pt-5">
    //             <div className="text-red-500">{errorMessage}</div>
    //             </div>
    //             )}

    //       </form>
    //     </div>
    //   </div>
    // </>
  );
};

export default Forgotpasswordconfirm;
