import { useState } from "react";
import  instance from '../../Axios/Axios'
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });

  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance.post('/admin/adminlogin', {formData}).then((response) => {
      if(response.data.response.status) {
        navigate('/admin/adminhome')
      } else {
        setError(response.data.error)
      }
    })
  };

  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">

<div className="flex justify-center pt-2">
</div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-5 overflow-auto rounded shadow-md w-80">
          <h2 className="text-2xl font-semibold mb-4">Admin LogIn</h2>
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
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Adminlogin;
