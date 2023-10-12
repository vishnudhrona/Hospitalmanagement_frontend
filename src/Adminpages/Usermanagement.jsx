import Adminsidebar from "../Admin/components/Adminsidebar"
import Table from "../Admin/components/Table"

const Usermanagement = () => {
  return (
    <>
    <div className="">
    <Adminsidebar />
    <div className="py-16 pl-64 h-screen">
    <Table />
    </div>
    </div>
        </>
  );
}

export default Usermanagement
