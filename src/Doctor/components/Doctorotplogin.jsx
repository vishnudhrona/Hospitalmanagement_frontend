import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from '../../Axios/Axios'

const Doctorotplogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    otp:""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { number } = useParams()
    console.log(number)
  
//   const location = useLocation()
//   console.log(location.search,'asddfdfgdfghghghghghghghghgh');
//   const searchParams = new URLSearchParams(location.search)
//   const otpId = searchParams.get('otpId')
//   console.log(otpId,'tqbiutyuuuuuuuuuuu');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let otp = formData.otp
        instance.post('/doctors/docotpverification',{otp, number})
        .then((data) => {
          console.log(data.data.auth,'ytytytytuiuiuiui');
          localStorage.setItem('newDoctor',JSON.stringify(data.data.doc));
          localStorage.setItem('doctorToken', JSON.stringify(data.data.auth))
          if(data.data.otpVerifiedStatus === 'approved') {
            navigate('/doctors/doctorlogin')
          } else {
            setErrorMessage( data.data.error );
          }
        })
        
    // You can handle form submission here
    }catch(error){
        setErrorMessage('Error occurred');
    }
   
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 p-5 h-96 overflow-auto rounded shadow-md w-80">
          <h2 className="text-2xl font-semibold mb-4">Log In</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="number"
                name="otp"
                placeholder="Otp"
                className="w-full p-2 border rounded"
                value={formData.otp}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <button
                type="submit"
                className=" bg-buttonColor text-white p-2 text-xs hover:bg-buttonColor"
              >
                Verify
              </button>
            </div>
            {errorMessage && (
                <div className="pt-5">
                <div className="text-red-500">{errorMessage}</div>
                </div>
                )}
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Doctorotplogin;
