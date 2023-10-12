import { useState, useEffect } from "react";
import  instance from '../../Axios/Axios'
import { Link, useNavigate } from 'react-router-dom'
const Usersignup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    patientfirstname: "",
    lastName: "",
    dob: "",
    gender: "",
    number: "",
    email: "",
    password : "",
  });

  const [formErrors, setFormErrors] = useState({
    email : "",
    password : "",
    patientfirstname : "",
    lastName: "",
    dob: "",
    gender: "",
    number: "",
  })

  useEffect(() => {
    const accessToken = localStorage.getItem('token')
    if(!accessToken) {
      navigate('/signup')
    } else {
      navigate('/')
    } 
  },[navigate])
    // const [id, setId] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try{
      const validationErrors = {};

      if (!formData.email.includes("@")) {
        validationErrors.email = 'Invalid email address';
    }

      if (formData.password.length < 6) {
        validationErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.patientfirstname.trim()) {
      validationErrors.patientfirstname = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'Last name is required';
    }

    if (!formData.dob.trim()) {
      validationErrors.dob = 'Date of birth is required';
    }

    if (!formData.gender.trim()) {
      validationErrors.gender = 'Gender is required';
    }

    if (!formData.number.trim()) {
      validationErrors.number = 'Number is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
  }

      const response = await instance.post("/signup",{formData})
      let {data} = response;
      data = JSON.stringify(data.userSecure)
      localStorage.setItem('user',data);
      // localStorage.setItem('token',JSON.stringify(data.auth)) 
      navigate(`/otpverification/${formData.number}`)
    }catch(err){
      alert(err);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 p-5 rounded shadow-md w-80">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="patientfirstname"
                placeholder="Patient first name"
                className="w-full p-2 border rounded"
                value={formData.patientfirstname}
                onChange={handleChange}
              />
              {formErrors.patientfirstname && (
    <span className="text-red-500">{formErrors.patientfirstname}</span>
  )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 border rounded"
                value={formData.lastName}
                onChange={handleChange}
              />
              {formErrors.lastName && (
    <span className="text-red-500">{formErrors.lastName}</span>
  )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="dob"
                placeholder="Dob"
                className="w-full p-2 border rounded"
                value={formData.dob}
                onChange={handleChange}
              />
              {formErrors.dob && (
    <span className="text-red-500">{formErrors.dob}</span>
  )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                className="w-full p-2 border rounded"
                value={formData.gender}
                onChange={handleChange}
              />
              {formErrors.gender && (
    <span className="text-red-500">{formErrors.gender}</span>
  )}
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="number"
                placeholder="Number"
                className="w-full p-2 border rounded"
                value={formData.number}
                onChange={handleChange}
              />
              {formErrors.number && (
    <span className="text-red-500">{formErrors.number}</span>
  )}
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && (
    <span className="text-red-500">{formErrors.password}</span>
  )}
            </div>
            

            <button type="submit" className="w-full bg-buttonColor text-white p-2 rounded hover:bg-buttonColor">
              Sign Up
            </button>
          </form>
          <Link
            to={'/login'}
            type="button"
            className="text-buttonColor bg-white hover:bg-gray-100 border border-buttonColor focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm p-2 inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 w-full justify-center"
          >
            New User? Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Usersignup;
