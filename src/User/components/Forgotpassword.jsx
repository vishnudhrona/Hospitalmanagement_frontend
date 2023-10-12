import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from '../../Axios/Axios'

const Forgotpassword = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    number:""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
        instance.post('/userforgotpassword',{formData})
        .then((data) => {
          console.log(data,'ytytytytuiuiuiuiiiiiiqwqwqw');
          console.log(data.data.response.number,'igot userrrr');
          if(data.data.response.status) {
            navigate(`/userforgotpasswordconfirm/${data.data.response.number}`)
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
          <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="number"
                name="number"
                placeholder="Number"
                className="w-full p-2 border rounded"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <button
                type="submit"
                className=" bg-buttonColor text-white p-2 text-xs hover:bg-buttonColor"
              >
                Send OTP
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

export default Forgotpassword;
