import { useState } from "react";
import  instance from '../../Axios/Axios'
import { Link, useNavigate } from "react-router-dom";

const Doctorlogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });

  const [error, setError] = useState("")
  const [approvalErr, setApprovalErr] = useState("")

  console.log(approvalErr,'bvbvbvbvbvbvbvbvbvbvbvbvb'); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance.post('/doctors/doctorlogin', {formData}).then((response) => {
      console.log(response,'i got login responseeeeee');
      if(response.data.status) {
        console.log(response.data.status,'Status is true');
        if(response.data.user.signupStatus === "Approved") {
          console.log('Signup status is true');
          navigate('/doctors/doctorhome')
        } else {
          console.log('Signup status is false');
          setApprovalErr(response.data.message)
        }
      } else {
        console.log('Status is false');
        setError(response.data.error)
      }
    })
    // You can handle form submission here
    console.log("Form data submitted:", formData);
  };

  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">

<div className="flex justify-center pt-2">
<img src="https://www.one-aster.com/themes/images/aster_Logo.png" alt="aster logo" />
</div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-5 h-96 overflow-auto rounded shadow-md w-80">
          <h2 className="text-2xl font-semibold mb-4">Log In</h2>
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

            <div className="">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && (
              <div>
                <div className="text-red-700">{error}</div>
              </div>
            )}
            {approvalErr && (
              <div>
                <div className="text-red-700">{approvalErr}</div>
              </div>
            )}
            <div className="flex justify-between items-center pt-2">
              <button className="pb-5 text-xs text-blue-400">
                Forgot Password?
              </button>
              <button
                type="submit"
                className=" bg-buttonColor text-white p-2 text-xs hover:bg-buttonColor"
              >
                LogIn
              </button>
            </div>
            <div className="pt-5">
            <Link
              to={"/doctors/doctorsignup"}
              type="button"
              className="text-buttonColor bg-white hover:bg-gray-100 border border-buttonColor focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm p-2 inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 w-full justify-center"
            >
              New User? Sign up
            </Link>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Doctorlogin;
