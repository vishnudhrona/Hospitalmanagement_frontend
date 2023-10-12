import  instance from '../../Axios/Axios'
import { useState, useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';

const Userlogin = (props) => {
  const navigate = useNavigate()

    console.log(props,'dfedfwe');
  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });

  const [error, setError] = useState("")

  useEffect(() => {
    const accessToken = localStorage.getItem('token')
    if(!accessToken) {
      navigate('/login')
    } else {
      navigate('/')
    } 
  },[navigate])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance.post("/userlogin",{formData})
    .then((response) => {
      localStorage.setItem('user',JSON.stringify(response.data.user));
      localStorage.setItem('token', JSON.stringify(response.data.auth))
      if(response.data.status) {
        navigate('/')
      } else {
        setError(response.data.error)
      }
    })
    // You can handle form submission here
    console.log("Form data submitted:", formData);
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
                <div className="text-red-500">{error}</div>
              </div>
            )}
            <div className="flex justify-between items-center pt-2">
              <Link to={'/userforgotpassword'} className="pb-5 text-xs text-blue-400">
                Forgot Password?
              </Link>
              <button
                type="submit"
                className=" bg-buttonColor text-white p-2 text-xs hover:bg-buttonColor"
              >
                LogIn
              </button>
            </div>
            <div className="pt-5">
            <Link
              to={'/signup'}
              type="button"
              className="text-buttonColor bg-white hover:bg-gray-100 border border-buttonColor focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm p-2 inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 w-full justify-center"
            >
              New User? Sign up
            </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Userlogin;
