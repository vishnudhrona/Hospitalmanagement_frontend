
const Sidebar = () => {
  return (
    <>
    <aside className="h-screen w-64 bg-gray-300 text-black">
    <div className="p-4">
        <h2 className="text-2xl font-bold">User Name</h2>
      </div>
      <ul className="py-4">
        <li className="px-4 py-2 hover:bg-gray-700">
          <a href="#" className="block">Update Details</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <a href="#" className="block">Reports</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <a href="#" className="block">See Bookings</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <a href="#" className="block">Upload Report</a>
        </li>
        {/* Add more links here */}
      </ul>
    </aside>
    
    </>
  )
}

export default Sidebar
