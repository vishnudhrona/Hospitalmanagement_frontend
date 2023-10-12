import { useState } from "react";
import Userlogin from "./Userlogin";
import Usersignup from "./Usersignup";

const Slotselector = () => {
  const [showForm, setShowForm] = useState(false)

  const formDisplay = () => {
    setShowForm(!showForm)
  }

  const [currentForm, setCurrentForm] = useState("userlogin");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
          <button
            className="bg-blue-500 text-white rounded-lg py-2 px-2"
            onClick={formDisplay}
          >
            Book Appointment
          </button>
          {showForm && 
          <div>
        {currentForm === "userlogin" ? 
        (<Userlogin onFormSwitch={toggleForm} />) 
        : (<Usersignup onFormSwitch={toggleForm} />
        )}
      </div> }
          
      
    </>
  );
};

export default Slotselector;
