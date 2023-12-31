import instance from '../../Axios/Axios'
import { useState } from 'react' 
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const Doctoraddprofile = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    department: '',
    gender: '',
    number: '',
    email: '',
    house: '',
    village : '',
    city : '',
    year: '',
    degree: '',
    college: '',
    experiencedyear: '',
    workeddepartment: '',
    position: '',
    hospital: '',
    description: '',
    fee : ''
  });
  const [file, setFile] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

    const doctorId = useSelector(state => state.doctorData.doctorId)
   console.log(doctorId,'zzzzzzzzzzzzzzzzzzzzzzzzzzzz');
   

  const submit = async(e) => {
    e.preventDefault()
    const formDataToSend = new FormData()
    formDataToSend.append('image', file)

    formDataToSend.append('doctorId', doctorId);
    
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    try {
      await instance.post('/doctors/uploadprofile', formDataToSend, {headers : {'Content-Type' : 'multipart/form-data'}})
      .then((response) => {
          console.log(response,'frontend profile added response');
          if(response.data.status) {
            navigate('/doctors/doctorprofile')
          } else {
            navigate('/doctors/doctoraddprofile')
          }
      })
      .catch((error) => {
        console.error(error,'got error');
      })
  
    } catch(err) {
      console.error(err,'bnuuuuuuuuuuuu');
    }
    
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="flex justify-center py-5">
          <img
            src="https://www.one-aster.com/themes/images/aster_Logo.png"
            alt="aster logo"
          />
        </div>
        <div className="flex justify-center items-center pb-5 ">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-5 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add your details</h2>
            <form
              // action="/doctors/doctoraddprofile"
              // method="post"
              encType="multipart/form-data"
              onSubmit={submit}
            >
              <div className="flex items-center justify-items-center mb-4 gap-7">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="w-full p-2 border rounded"
                  value={formData.firstname}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="w-full p-2 border rounded"
                  value={formData.lastname}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  className="w-full p-2 border rounded"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center justify-center mb-4 gap-7">
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  className="w-full p-2 border rounded"
                  value={formData.gender}
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="number"
                  placeholder="Number"
                  className="w-full p-2 border rounded"
                  value={formData.number}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  autoComplete='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center justify-items-center mb-4 gap-7">
                <input
                  type="text"
                  name="house"
                  placeholder="House No."
                  className="w-full p-2 border rounded"
                  value={formData.house}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="village"
                  placeholder="Village"
                  className="w-full p-2 border rounded"
                  value={formData.village}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="w-full p-2 border rounded"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <h1 className="mb-2">Education :</h1>

              <div className="flex items-center justify-items-center mb-4 gap-7">
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  className="w-full p-2 border rounded"
                  value={formData.year}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  className="w-full p-2 border rounded"
                  value={formData.degree}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="college"
                  placeholder="College"
                  className="w-full p-2 border rounded"
                  value={formData.college}
                  onChange={handleChange}
                />
              </div>
              <h1 className="mb-2">Experience :</h1>

              <div className="flex items-center justify-items-center mb-4 gap-7">
                <input
                  type="text"
                  name="experiencedyear"
                  placeholder="Year"
                  className="w-full p-2 border rounded"
                  value={formData.experiencedyear}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="workeddepartment"
                  placeholder="Department"
                  className="w-full p-2 border rounded"
                  value={formData.workeddepartment}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  className="w-full p-2 border rounded"
                  value={formData.position}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="hospital"
                  placeholder="Hospital"
                  className="w-full p-2 border rounded"
                  value={formData.hospital}
                  onChange={handleChange}
                />
               
              </div>

              <div className="flex items-center justify-items-center mb-4 gap-7">
                <input
                  type="file"
                  name="doctorimage"
                  placeholder="Image"
                  className="w-full p-2 border rounded"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  placeholder="Enter your description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

                <h6 className='text-gray-700 text-sm font-bold mb-2'>Consultation Fee</h6>
              <div className="flex items-center justify-items-center mb-4 gap-7">
                <input
                  type="text"
                  name="fee"
                  placeholder="Consultation Fee"
                  className="w-full p-2 border rounded"
                  value={formData.fee}
                  onChange={handleChange}
                />
              
              </div>
              <button
                type="submit"
                className="w-full bg-buttonColor text-white p-2 mb-2 rounded hover:bg-buttonColor"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctoraddprofile
