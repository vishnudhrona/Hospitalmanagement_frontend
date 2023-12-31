import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../Axios/Axios";
import { useSelector } from "react-redux";

const Doctordetails = () => {
  const [doctorProfile, setDocProfile] = useState([]);
  const [image, setImage] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDoctorProfile, setFilteredDoctorProfile] = useState([]);

  console.log(filteredDoctorProfile, "bbbbbbbbbqqqqqqqqq");

  console.log(searchInput, "hhhhyyyykkkk");

  const sortDoc = useSelector(
    (state) => state.patientData.sortedDoc.doctorDetails
  );
  const sortImg = useSelector((state) => state.patientData.sortedDoc.image);
  console.log(sortDoc, "bbbbbbbbnnnnnnnnnqqqqqqqqq");

  useEffect(() => {
    instance.post("/doctorbooking").then((docProfile) => {
      console.log(docProfile.data.docProfile, "i got fuckersss");
      if (!sortDoc) {
        setDocProfile(docProfile.data.docProfile.doctorDetails);
        setFilteredDoctorProfile(docProfile.data.docProfile.doctorDetails);
        setImage(docProfile.data.docProfile.image);
      } else {
        setDocProfile(sortDoc);
        setImage(sortImg);
      }
    });
  }, [sortDoc, sortImg]);

  const searchDoctors = () => {
    const query = searchInput.toLowerCase();
    const filteredProfiles = doctorProfile.filter((doc) => {
      const fullName = `${doc.firstname} ${doc.lastname}`.toLowerCase();
      return fullName.includes(query);
    });
    console.log(filteredProfiles, "i got fullname");
    setFilteredDoctorProfile(filteredProfiles);
    console.log(query, "xxxxxxxrrrrrrrrr");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchDoctors();
    // instance.post('/searchdoctor',{searchInput})
  };



  const searchDoc = (e) => {
      setSearchInput(e.target.value);
  };


  return (
    <>
      <div className="">
        <div className="pt-5">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Doctors"
                required=""
                onChange={searchDoc}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
              </button>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-customColor rounded-lg border border-customColor hover:bg-buttonHov focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              Search
            </button>
          </form>
        </div>

        <div className="grid grid-rows">
          <div className="max-w-sm w-full lg:max-w-full  p-5">
            {filteredDoctorProfile.length > 0  && searchInput ? (



<>
{filteredDoctorProfile.map((doc, index) => (
  <div
    key={index}
    style={{
      borderBottom: "1px solid #ccc",
      marginBottom: "10px",
      padding: "10px",
    }}
  >
    <div className="flex">
      <div
        className="h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden mt-5"
        style={{ backgroundImage: `url(${image[index]})` }}
        title="Woman holding a mug"
        key={index}
      ></div>

      <div className=" border-gray-400 lg:border-l-0  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h1 className="text-doctorName font-bold text-xl mb-2">
            {doc.firstname} {doc.lastname}
          </h1>
          <p className="text-gray-500 text-lg">
            Position - {doc.position}
          </p>
          <p className="text-gray-500 text-lg">
            Department - {doc.department}
          </p>
          <p className="text-gray-500 text-lg">
            Consultant - Surgical & Gynaecological Oncology &
            Robotic Surgeon, HIPEC &
          </p>
          <p className="text-gray-500 text-lg">
            PIPAC Super-specialist
          </p>
          <p className="text-gray-500 text-lg">
            Speciality - Surgical Oncology
          </p>
          <p className="text-gray-500 text-lg font-bold">
            MBBS, MS, MCh(Onco), FRCS Edinburgh
          </p>
          <div className="flex">
            <Link
            to={`/timeslot/${doc.doctorId}`}
              className="text-customColor hover:text-white border border-customColor hover:bg-customColor focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-customColor dark:text-customColor dark:hover:text-white dark:hover:bg-customColor dark:focus:ring-customColor"
            >
              Video Consultation
            </Link>
            <Link
            to={`/timeslot/${doc.doctorId}`}
              className="text-customColor hover:text-white border border-customColor hover:bg-customColor focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-customColor dark:text-customColor dark:hover:text-white dark:hover:bg-customColor dark:focus:ring-customColor"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
</>


             
            ) : (
              <>
              {doctorProfile.map((doc, index) => (
                <div
                  key={index}
                  style={{
                    borderBottom: "1px solid #ccc",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                  <div className="flex">
                    <div
                      className="h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden mt-5"
                      style={{ backgroundImage: `url(${image[index]})` }}
                      title="Woman holding a mug"
                      key={index}
                    ></div>

                    <div className=" border-gray-400 lg:border-l-0  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                      <div className="mb-8">
                        <h1 className="text-doctorName font-bold text-xl mb-2">
                          {doc.firstname} {doc.lastname}
                        </h1>
                        <p className="text-gray-500 text-lg">
                          Position - {doc.position}
                        </p>
                        <p className="text-gray-500 text-lg">
                          Department - {doc.department}
                        </p>
                        <p className="text-gray-500 text-lg">
                          Consultant - Surgical & Gynaecological Oncology &
                          Robotic Surgeon, HIPEC &
                        </p>
                        <p className="text-gray-500 text-lg">
                          PIPAC Super-specialist
                        </p>
                        <p className="text-gray-500 text-lg">
                          Speciality - Surgical Oncology
                        </p>
                        <p className="text-gray-500 text-lg font-bold">
                          MBBS, MS, MCh(Onco), FRCS Edinburgh
                        </p>
                        <div className="flex">
                          <Link
                          to={`/timeslot/${doc.doctorId}`}
                            className="text-customColor hover:text-white border border-customColor hover:bg-customColor focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-customColor dark:text-customColor dark:hover:text-white dark:hover:bg-customColor dark:focus:ring-customColor"
                          >
                            Video Consultation
                          </Link>

                          <Link
                          to={`/timeslot/${doc.doctorId}`}
                            className="text-customColor hover:text-white border border-customColor hover:bg-customColor focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-customColor dark:text-customColor dark:hover:text-white dark:hover:bg-customColor dark:focus:ring-customColor"
                          >
                            Book An Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctordetails;
