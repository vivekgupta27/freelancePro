import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../shared/hooks/usefetch';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ClientTable = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/api/client/all_clients");
  const [clients, setClients] = useState([]); // local state
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);
  const itemsPerPage = 10;

  // jab bhi data aata hai, local state me sync karo
  useEffect(() => {
    if (data) {
      setClients(data);
    }
  }, [data]);

  const pageData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return clients?.slice(startIndex, endIndex) || [];
  }, [currentPage, clients]);

  const toggleDropdown = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/client/delete_client/${id}`,
        { withCredentials: true }
      );

      if (res.status === 200) {
        // client ko UI se turant hatao
        setClients(prev => prev.filter(c => c._id !== id));
        toast.success("Client deleted successfully ✅");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete client ❌");
    }
  };

  if (loading) return <div className="text-white p-4">Loading...</div>;
  if (error) return <div className="text-red-400 p-4">Error fetching clients</div>;

  return (
    <div className="mt-6 bg-[#1e1e1e]/80 backdrop-blur-md p-6 rounded-xl border border-[#2f2f2f] shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-4">Client List</h2>

      <div className="overflow-x-auto max-h-[70vh] overflow-y-auto">
        <table className="min-w-full text-sm text-white border border-[#3a3a3a]">
          <thead className="bg-[#2b2b2b]">
            <tr>
              {['Client Name', 'Email', 'Phone', 'Company', 'Status', 'Actions'].map((heading, idx) => (
                <th key={idx} className="border border-[#3a3a3a] px-4 py-3 text-left font-bold text-gray-300">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((item, index) => (
              <tr
                key={item._id}
                className={`transition-all duration-200 ${
                  index % 2 === 0 ? 'bg-[#1c1c1c]' : 'bg-[#272727]'
                } hover:bg-[#343434]`}
              >
                <td className="border border-[#3a3a3a] px-4 py-3">{item.name}</td>
                <td className="border border-[#3a3a3a] px-4 py-3">{item.email}</td>
                <td className="border border-[#3a3a3a] px-4 py-3">{item.phone || "-"}</td>
                <td className="border border-[#3a3a3a] px-4 py-3">{item.company || "-"}</td>
                <td className="border border-[#3a3a3a] px-4 py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === "true"
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {item.status === "true" ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="border border-[#3a3a3a] px-4 py-3 relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="px-3 py-1 bg-[#3f3f46] text-gray-100 rounded hover:bg-gray-600 transition"
                  >
                    ⋮
                  </button>

                  {openIndex === index && (
                    <div className="absolute top-10 right-0 z-50 bg-[#2d2d2d] text-white border border-[#444] rounded-md shadow-lg w-[140px]">
                      <ul className="text-sm">
                        <Link to={'/edit'} state={{ client: item }}>
                          <li className="px-4 py-2 hover:bg-[#3b3b3b] cursor-pointer transition-all duration-300 ease-in-out">Edit</li>
                        </Link>
                        <li
                          onClick={() => handleDelete(item._id)}
                          className="px-4 py-2 hover:bg-[#3b3b3b] cursor-pointer transition-all duration-300 ease-in-out"
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex gap-2 mt-6 justify-center">
          {Array.from({ length: Math.ceil(clients?.length / itemsPerPage) || 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md border font-medium transition-all ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-[#2a2a2a] text-gray-300 border-[#3f3f3f] hover:bg-[#3a3a3a]'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTable;
