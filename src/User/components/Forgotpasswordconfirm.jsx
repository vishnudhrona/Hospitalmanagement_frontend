import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from '../../Axios/Axios'

const Forgotpasswordconfirm = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    otp:"",
    password:""
  });

  const { userNumber } = useParams()
  console.log(userNumber,'yuiyuiuiuuiuiiiiii');

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
        instance.post('/userforgotpasswordconfirm',{ otp: formData.otp, password: formData.password, number: userNumber })
        .then((data) => {
          console.log(data,'ytytytytuiuiuiui');
          if(data.data.response) {
            navigate('/')
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
                placeholder="OTP"
                className="w-full p-2 border rounded"
                value={formData.otp}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="New Password"
                className="w-full p-2 border rounded"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="submit"
                className=" bg-buttonColor text-white p-2 text-xs hover:bg-buttonColor"
              >
                Confirm
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

export default Forgotpasswordconfirm;
