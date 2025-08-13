import { useState, useEffect } from 'react';
import { FaEye, FaDownload, FaSpinner } from 'react-icons/fa';
import { useFetch } from '../../shared/hooks/usefetch';
import axios from 'axios';

const ProposalPage = () => {
  const [proposals, setProposals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadingId, setDownloadingId] = useState(null); // Track which proposal is downloading
  
  const itemsPerPage = 5;
  const { data, loading, error } = useFetch("http://localhost:3000/api/client/all_clients");
  
  if (loading) return <div>Loading...</div>;
  
  const handleDownload = async (proposalId) => {
    setDownloadingId(proposalId); // Set loading state for this specific proposal
    
    try {
      const res = await axios.post(
        `http://localhost:3000/api/proposal/generate/${proposalId}/download`,
        {},
        {
          withCredentials: true,
          responseType: 'blob'
        }
      );
      
      console.log(res);
      
      const blob = new Blob([res.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `proposal-${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.log(error);
      // You might want to show an error message to the user here
    } finally {
      setDownloadingId(null); // Clear loading state
    }
  };
  
  const paginatedProposals = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const totalPages = Math.ceil(proposals.length / itemsPerPage);
  
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Proposals</h1>
      
      <div className="overflow-x-auto bg-[#1f1f1f] p-4 rounded-xl border border-gray-700">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#2a2a2a] text-gray-300">
            <tr>
              <th className="p-3 border border-gray-600">Client Name</th>
              <th className="p-3 border border-gray-600">Company</th>
              <th className="p-3 border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProposals.map((proposal, index) => (
              <tr key={proposal._id} className="hover:bg-[#2f2f2f] transition">
                <td className="p-3 border border-gray-700">{proposal.name}</td>
                <td className="p-3 border border-gray-700">{proposal.company}</td>
                <td className="p-3 border border-gray-700 flex gap-4 items-center">
                  <button 
                    onClick={() => handleDownload(proposal._id)}
                    disabled={downloadingId === proposal._id}
                    className={`p-2 rounded-md transition-all ${
                      downloadingId === proposal._id 
                        ? 'cursor-not-allowed opacity-50' 
                        : 'hover:bg-[#3a3a3a]'
                    }`}
                    title={downloadingId === proposal._id ? 'Downloading...' : 'Download PDF'}
                  >
                    {downloadingId === proposal._id ? (
                      <FaSpinner className="text-blue-400 animate-spin" />
                    ) : (
                      <FaDownload className="text-green-400 hover:text-green-600" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md border font-medium transition-all ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-[#2a2a2a] text-gray-300 border-gray-600 hover:bg-[#3a3a3a]'
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

export default ProposalPage;