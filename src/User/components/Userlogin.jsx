import instance from "../../Axios/Axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  accessToken,
  patientId,
  name,
} from "../../Redux/Reducers/PatientSlice";

const Userlogin = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });

  const [error, setError] = useState("");

  console.log(error,'qqqqqqqqwwwwwwwwrrrrrrrrr');

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance.post("/userlogin", { formData }).then((response) => {
      console.log(response.data.message, "i got login response");
     
      // localStorage.setItem('user',JSON.stringify(response.data.user));
      if (response.data.status === "unblock") {
        localStorage.setItem("token", JSON.stringify(response.data.auth));
        dispatch(accessToken(response.data.auth));
        dispatch(patientId(response.data.user._id));
        dispatch(name(response.data.user.name));
        navigate("/");
      } else if(response.data.status === 'nouser') {
        setError(response.data.message);
      } else {
        setError(response.data.error)
      }
    });
    // You can handle form submission here
    console.log("Form data submitted:", formData);
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
                    className="mb-2 h-5 border border-slate-300 rounded custom-input"
                    type="text"
                    name="number"
                    placeholder="Number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                  <input
                    className="h-5 border-slate-300 rounded custom-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {error && (
                    <div>
                      <div className="text-red-500">{error}</div>
                    </div>
                  )}
                  <Link
                    to={"/userforgotpassword"}
                    className="text-xs font-semibold hover:text-slate-500"
                  >
                    Forgot Password?
                  </Link>
                  <button
                    type="submit"
                    className="bg-loginBackgroundColor text-white text-sm p-1 w-52 mt-4 hover:bg-hoverLogin rounded"
                  >
                    Login
                  </button>
                  <Link
                    to={"/signup"}
                    type="button"
                    className="text-xs font-semibold hover:text-slate-500 w-3/4 mt-5 "
                  >
                    Create Account
                  </Link>
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
   
  );
};

export default Userlogin;
