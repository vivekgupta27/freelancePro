import { Link } from 'react-router-dom';
import ClientTable from './ClientTable';

const ClientPage = () => {
  return (
    <div className="h-full w-full  text-white">
      {/* Page Header */}
     <div className='flex justify-between items-center'> 
        <div className="">
        <h1 className="text-2xl font-semibold text-white tracking-wide">
          Manage Clients
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          View, edit, and keep track of all your valuable clients.
        </p>
      </div>
      <Link to={'/addClient'} className=' rounded-md p-2 font-semibold text-white bg-blue-600 cursor-pointer hover:bg-blue-800 transition-all duration-200 ease-in-out'>Add Clients</Link>
     </div>
      {/* Client Table Section */}
      
        <ClientTable />
    </div>
  );
};

export default ClientPage;
