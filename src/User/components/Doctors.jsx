
const Doctors = () => {
  return (
    <>
      <div className="bg-blue-200 p-5">
        <div className="container-fluid mx-auto p-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
        Our Doctors
          </h1>
          <p className="text-xs text-blue-900">
          We have some of the best specialty doctors from around the world, they bring years of experience and offer evidence based treatment 
          </p>
          <p className="text-xs text-blue-900 ">to ensure the best care for you.</p>
          <div className="w-60 rounded overflow-hidden shadow-lg pt-5">
            <img
              className="w-full"
              src="https://www.asterhospitals.in/sites/default/files/styles/doctors_details_xl/public/2022-07/dr.jacob-p-alappat-best-neurosurgeon-in-kerala.jpg.webp?itok=yByWx0Iv"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blue-900">Dr.Jacob P.Alappat</div>
              <p className="text-blue-900 text-base">
              Senior Consultant & Head of Neurosurgery
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctors
