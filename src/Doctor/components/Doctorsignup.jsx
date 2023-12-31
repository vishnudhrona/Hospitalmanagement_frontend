import { useState } from "react"
import  instance from '../../Axios/Axios'
import { Link, useNavigate } from "react-router-dom"
const Doctorsignup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    department: '',
    gender: '',
    number: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstname: '',
    lastname: '',
    department: '',
    gender: '',
    number: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const validationErrors = {};

      if (!formData.email.includes("@")) {
        validationErrors.email = 'Invalid email address';
    }

      if (formData.password.length < 6) {
        validationErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.firstname.trim()) {
      validationErrors.firstname = 'First name is required';
    }

    if (!formData.lastname.trim()) {
      validationErrors.lastname = 'Last name is required';
    }

    if (!formData.department.trim()) {
      validationErrors.department= 'Department is required';
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

      instance.post('doctors/doctorsignup',{formData}).then((response) => {
        console.log(response.data.doctor,'vgvgvgvgvgvgvgvgvgvgvgv');
        response = JSON.stringify(response.data.doctor)
        localStorage.setItem('doctor',response);
        navigate(`/doctors/docotpverification/${formData.number}`)
      })
    } catch(err) {
      console.error(err);
    }
    
  };

  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">

    <div className="flex justify-center ">
    <img src="https://www.one-aster.com/themes/images/aster_Logo.png" alt="aster logo" />
    </div>
     <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-5 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-items-center mb-4 gap-7">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-full p-2 border rounded"
              value={formData.firstname}
              onChange={handleChange}
            />
            {formErrors.firstname && (
    <span className="text-red-500">{formErrors.firstname}</span>
            )}
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-full p-2 border rounded"
              value={formData.lastname}
              onChange={handleChange}
            />
            {formErrors.lastname && (
    <span className="text-red-500">{formErrors.lastname}</span>
            )}
          </div>
          <div className="flex items-center justify-center mb-4 gap-7">
            <input
              type="text"
              name="department"
              placeholder="Department"
              className="w-full p-2 border rounded"
              value={formData.department}
              onChange={handleChange}
            />
             {formErrors.department && (
    <span className="text-red-500">{formErrors.department}</span>
            )}
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
          <div className="flex items-center justify-items-center mb-4 gap-7">
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
    <span className="text-red-500">{formErrors.email}</span>
            )}
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

          <button
            type="submit"
            className="w-full bg-buttonColor text-white p-2 mb-2 rounded hover:bg-buttonColor"
          >
            Sign Up
          </button>
        </form>
        <Link
              to={'/doctors/doctorlogin'}
              type="button"
              className="text-buttonColor bg-white hover:bg-gray-100 border rounded border-buttonColor focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm p-2 inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 w-full justify-center"
            >
              Already have an account? LogIn
            </Link>
      </div>
    </div>
    </div>

    </>
    
  )
}

export default Doctorsignup
