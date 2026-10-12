import CreateTask from '../Others/CreateTask';
import Headers from '../Others/Headers';
import AllTask from '../Others/AllTask';
import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';

const AdminDashboard = ({ data }) => {
  const { userData: authdata } = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] min-h-screen w-full text-white px-4 py-5 sm:px-6 sm:py-7 lg:p-10">
      <Headers data={data} />

      <CreateTask />

      <AllTask data={authdata.employeesData} />
    </div>
  );
};

export default AdminDashboard;