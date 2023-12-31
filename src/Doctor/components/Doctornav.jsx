import { Link } from "react-router-dom";
import 'flowbite'
import { AiFillCaretDown } from "react-icons/ai";
import { FaHospital } from "react-icons/fa"
import { PiStethoscope } from "react-icons/pi"
import { FcCalendar } from "react-icons/fc"
import { ImUserTie } from "react-icons/im"
import { useState, useEffect } from 'react';
import { RiLoginBoxLine } from "react-icons/ri"
import jwt_decode from 'jwt-decode'
import Docdropdownmenu from "./Docdropdownmenu";

const Doctornav = () => {

    const accessToken = localStorage.getItem('doctorToken')
    console.log(accessToken,'tyutyutyutyuuuuuxxxxxx');
    const [showDropdown, setShowDropdown] = useState(false)
    const [loggedIn, setLoggedIn] = useState('')

    useEffect(() => {
        if(accessToken) {
          try {
          const decode = jwt_decode(accessToken)
          console.log(decode,'patient decode');
          setLoggedIn(decode?.doctorName || '')
          } catch(err) {
            console.log(err,'jkooooooooooooooo');
            localStorage.removeItem('Doctortoken');
          }
        } else {
          console.log('user not loggedIn');
        }
      }, [accessToken])

  return (
    <nav className="bg-customColor border-gray-200 dark:bg-gray-900 dark:border-gray-700 " style={{zIndex : 60,
        position : "absolute",
        width : "100%"
         }}>
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <Link to={'/doctors/doctorhome'} className="flex items-center">
                  <img
                    src="https://www.asterhospitals.in/themes/custom/aster/aster-logo.svg"
                    className="h-8 pl-16"
                    alt="Aster Logo"
                  />
                  {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span> */}
                </Link>
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
                        </div>
                      </button>
                    </li>
                    <li>
                      <Link
                      to={'/doctors/patientbookingdetails'}
                        className="hover:bg-buttonHov w-auto h-16 flex flex-col py-2 px-4 text-white border-r border-gray-500"
                      >
                        <div className="flex items-center">
                          <PiStethoscope />
                          <div className="flex flex-col items-start text-lg px-3 pt-1">
                            <span>Your</span>
                            <span>Bookings</span>
                          </div>
                        </div>
                        <div className="pt-custom flex items-center justify-center z-50">
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/doctors/scheduletime"}
                        className="hover:bg-buttonHov w-auto h-16 flex flex-col py-2 px-4 text-white border-r border-gray-500"
                      >
                        <div className="flex items-center">
                          <FcCalendar />
                          <div className="flex flex-col items-start text-lg px-3 pt-1">
                            <span>Schedule</span>
                            <span>Time</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/doctors/doctorprofile"}
                        className="hover:bg-buttonHov w-auto h-16 flex flex-col py-2 px-4 text-white border-r border-gray-500"
                      >
                        <div className="flex items-center">
                          <ImUserTie />
                          <div className="flex flex-col items-start text-lg px-3 pt-1">
                            <span>Your</span>
                            <span>Profile</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      {loggedIn ? (
                        <Link
                        className="text-white p-6 flex items-center gap-2 text-lg"
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        { loggedIn ? `Hello ${loggedIn}!` : 'Login' }
                        <div className='absolute'>
                        {showDropdown && (
                          <Docdropdownmenu />
                        )}
                        </div>
                        <RiLoginBoxLine />
                      </Link>
                      ) : (
                        <Link
                        to={"/doctors/doctorlogin"}
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
  )
}

export default Doctornav
