import instance from '../../Axios/Axios'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortedDoc } from '../../Redux/Reducers/PatientSlice';

const Sidebar = () => {

  const dispatch = useDispatch()

  const [selectedOption, setSelectedOption] = useState([]);
  const [speciality, setSpeciality] = useState([])


console.log(selectedOption,'klklklklklklkl');
  
//  const department = selectedOption.map((department) => department)
// console.log(department,'cvnnnnnnnnnnnnnnnnn');
      
      useEffect(() => {
      instance.get('/getspeciality').then((speciality) => {
        setSpeciality(speciality.data.doctor)
      })
      },[])

      useEffect(() => {
        instance.post('/sortdoctor',{selectedOption}).then((sortedDoc) => {
          console.log(sortedDoc.data.sortedDoc,'bbbbbnnnnnnccccc');
          dispatch(setSortedDoc(sortedDoc.data.sortedDoc))
        })
      },[selectedOption,dispatch])
      

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value)
    }

      const unselectOption = () => {
        setSelectedOption([]); // Set selectedOption to an empty string
      };
  

  return (
    <>
      <aside className=" w-64 text-black">
        <div className="flex gap-12 p-4">
          <h6 className="text-sm">FILTERS</h6>
          <button
            className="text-sm hover:text-slate-500"
            onClick={unselectOption}
          >
            Clear All
          </button>
        </div>
        <div className="px-5">
          <h6 className="text-xs pb-3">SPECIALITY</h6>
          <div className="h-72 overflow-auto">
          {speciality.map((dep, index) => (
            <>
            <div key={index}>
              <label className="gap-4">
                <input
                  type="radio"
                  value={dep.department}
                  checked={selectedOption === dep.department}
                  onChange={handleOptionChange}
                  key={index}
                  className="h-3 w-3 appearance-none checked:bg-slate-600 checked:border-transparent border border-gray-400 rounded-none mr-2"
                />
                {dep.department}
              </label>
            </div>
            </>
          ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar
