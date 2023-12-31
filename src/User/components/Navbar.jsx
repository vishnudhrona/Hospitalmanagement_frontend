import 'flowbite'
import { AiFillCaretDown } from "react-icons/ai";
import { FaHospital } from "react-icons/fa"
import { PiStethoscope } from "react-icons/pi"
import { FcCalendar } from "react-icons/fc"
import { ImUserTie } from "react-icons/im"
import { Link } from 'react-router-dom';
import Meagamenuhospitals from './Meagamenuhospitals';
import { useEffect, useState } from 'react';
import Megamenuspecialities from './Megamenuspecialities';
import { RiLoginBoxLine } from "react-icons/ri"
import jwt_decode from 'jwt-decode'
import Dropdownmenu from './Dropdownmenu';
// import { useSelector } from 'react-redux';

const Navbar = () => {

  const accessToken = localStorage.getItem('token')
  const [showMegaMenuHospitals, setShowMegaMenuHospitals] = useState(false);
  const [showMegaMenuSpecialities, setShowMegaMenuSpecialities] = useState(false);
  const [loggedIn, setLoggedIn] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)


  useEffect(() => {
    if(accessToken) {
      try {
      const decode = jwt_decode(accessToken)
      setLoggedIn(decode || '')
      } catch(err) {
        localStorage.removeItem('token');
      }
    } else {
      console.log('user not loggedIn');
    }
  }, [accessToken])
  


  const handleMouseEnter = () => {
    setShowMegaMenuHospitals(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenuHospitals(false);
  };

  const handleMouseEnterSpecialities = () => {
    setShowMegaMenuSpecialities(true);
  };

  const handleMouseLeaveSpecialities = () => {
    setShowMegaMenuSpecialities(false);
  };

  return (
    <div className='sticky top-0 z-50'>
    <nav className="bg-customColor border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="https://www.asterhospitals.in/themes/custom/aster/aster-logo.svg"
            className="h-8 pl-16"
            alt="Aster Logo"
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span> */}
        </a>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
          //  onMouseEnter={handleMouseEnter}
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-0 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            style={{ backgroundColor: "#2b7786" }}
          >
            <li>
              <button
                className="hover:bg-buttonHov w-auto h-16 flex flex-col py-2 px-4 text-white border-l border-r border-gray-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center">
                  <FaHospital />
                  <div className="flex flex-col items-start text-lg px-3 pt-1">
                    <span>Our</span>
                    <span>Hospitals</span>
                  </div>
                  <AiFillCaretDown />
                </div>
                <div className="pt-custom flex items-center justify-center z-50">
                  {showMegaMenuHospitals && <Meagamenuhospitals />}
                </div>
              </button>
            </li>
            <li>
              <button
                className="hover:bg-buttonHov w-auto h-16 flex flex-col py-2 px-4 text-white border-r border-gray-500"
                onMouseEnter={handleMouseEnterSpecialities}
                onMouseLeave={handleMouseLeaveSpecialities}
              >
                <div className="flex items-center">
                  <PiStethoscope />
                  <div className="flex flex-col items-start text-lg px-3 pt-1">
                    <span>Our</span>
                    <span>Specialities</span>
                  </div>
                  <AiFillCaretDown />
                </div>
                <div className="pt-custom flex items-center justify-center z-50">
                  {showMegaMenuSpecialities && <Megamenuspecialities />}
                </div>
              </button>
            </li>
            <li>
              <Link
                to={"/bookappointment"}
                className="hover:bg-buttonHov w-auto h-16 flex flex-col py-2 px-4 text-white border-r border-gray-500"
              >
                <div className="flex items-center">
                  <FcCalendar />
                  <div className="flex flex-col items-start text-lg px-3 pt-1">
                    <span>Book An</span>
                    <span>Appointment</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to={"/paymentsuccess"}
                className="hover:bg-buttonHov w-auto h-16 flex flex-col py-2 px-4 text-white border-r border-gray-500"
              >
                <div className="flex items-center">
                  <ImUserTie />
                  <div className="flex flex-col items-start text-lg px-3 pt-1">
                    <span>International</span>
                    <span>Patients</span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <Link
                className="text-white p-6 flex items-center gap-2 text-lg "
                onClick={() => setShowDropdown(!showDropdown)}
              >
               
                { loggedIn ? `Hello ${loggedIn.user}!` : 'Login' }
                
                <div className='absolute'>
                {showDropdown && (
                  <Dropdownmenu />
                )}
                </div>
                <RiLoginBoxLine />
              </Link>
              ) : (
                <Link
                to={"/login"}
                className="text-white p-6 flex items-center gap-2 text-lg"
              >
                Login 
                <RiLoginBoxLine />
              </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar
