
const Doctordetails = () => {
  return (
    <>
    <div className="max-w-sm w-full lg:max-w-full lg:flex p-5">
  <div
    className="h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden mt-5"
    style={{ backgroundImage: 'url("https://www.asterhospitals.in/sites/default/files/styles/doctors_filter/public/2022-11/prof.dr_.somashekhar-sp-surgical-oncologist-in-bangalore.jpg.webp?itok=d1uNWDhQ")' }}
    title="Woman holding a mug"
  ></div>
  <div className=" border-gray-400 lg:border-l-0  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-doctorName font-bold text-xl mb-2">
      Prof. Dr. Somashekhar S P
      </div>
      <p className="text-gray-500 text-lg">
      Chairman - Medical Advisory Board, Aster DM Healthcare - GCC & India,    
      </p>
      <p className="text-gray-500 text-lg">Global Director - Aster International Institute of Oncology - GCC & India, Lead</p>
      <p className="text-gray-500 text-lg">Consultant - Surgical & Gynaecological Oncology & Robotic Surgeon, HIPEC &</p>
      <p className="text-gray-500 text-lg">PIPAC Super-specialist</p>
      <p className="text-gray-500 text-lg">Speciality - Surgical Oncology</p>
      <p className="text-gray-500 text-lg font-bold">MBBS, MS, MCh(Onco), FRCS Edinburgh</p>
      <div className="flex">
      <a href="/timeslot" type="button" className= "text-customColor hover:text-white border border-customColor hover:bg-customColor focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-customColor dark:text-customColor dark:hover:text-white dark:hover:bg-customColor dark:focus:ring-customColor">Video Consultation</a>
      <a href="/timeslot" type="button" className= "text-customColor hover:text-white border border-customColor hover:bg-customColor focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-customColor dark:text-customColor dark:hover:text-white dark:hover:bg-customColor dark:focus:ring-customColor">Book An Appointment</a>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Doctordetails
