import { useEffect, useState } from 'react';
import instance from '../../Axios/Axios'


const Table = () => {

  const [users, setUsers] = useState([])
  const [blockedStatus, setBlockedStatus] = useState([])
  const [unblockedStatus, setUnblockedStatus] = useState([])



  useEffect(() => {
    instance.get('/admin/usermanagement').then((users) => {
      console.log(users.data.users,'mkomkomkomkomkoooooooooo');
      setUsers(users.data.users)
      if(blockedStatus.length === 0) {
        setBlockedStatus(new Array(users.data.users.length).fill(false));
      }
      if(unblockedStatus.length === 0) {
        setUnblockedStatus(new Array(users.data.users.length).fill(false))
      }

    })
  },[blockedStatus, unblockedStatus])

  useEffect(() => {
    // Use this useEffect to update the UI when blockedStatus changes
    console.log(blockedStatus, 'Blocked Status Updated');
  }, [blockedStatus]);


  const userBlock = (userId, index) => {
    instance.get(`/admin/userblock?userId=${ userId }`).then((status) => {
      console.log(status.data.message,'vbvvbvbvbbbbbbb');
      const updatedStatuses = [...blockedStatus];
      updatedStatuses[index] = status.data.message;
      setBlockedStatus(updatedStatuses)
    })
  }
  
  const userUnblock = (userId, index) => {
    instance.get(`/admin/userunblock?userId=${ userId}`).then((status) => {
      console.log(status,'gtygtygtyyyyyyyyyyy');
      const updatedStatus = [...unblockedStatus];
      updatedStatus[index] = status.data.message
      setUnblockedStatus(updatedStatus)
    })
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Patient Firstname
              </th>
              <th scope="col" className="px-6 py-3">
                Last name
              </th>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={user._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.patientfirstname}
                </th>
                <td className="px-6 py-4">{user.lastName}</td>
                <td className="px-6 py-4">{user.number}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{blockedStatus[index]}</td>
                <td className="px-6 py-4">
                    <button
                      className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                      onClick={() => userBlock(user._id, index)}
                    >
                      Block/
                    </button>
                    <button
                      className="font-medium text-green-400 dark:text-blue-500 hover:underline"
                      onClick={() => userUnblock(user._id, index)}
                    >
                      Unblock
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table
