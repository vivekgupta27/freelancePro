import { useMemo } from 'react';
import { useFetch } from '../../shared/hooks/usefetch';

const RecentClients = () => {
  const { data: clients, loading } = useFetch('http://localhost:3000/api/client/all_clients');

  // Filter recent clients (within 4 days)
  const recentClients = useMemo(() => {
    const today = new Date();
    return clients?.filter(client => {
      const createdAt = new Date(client.createdAt);
      const diffDays = (today - createdAt) / (1000 * 60 * 60 * 24);
      return diffDays <= 4;
    }) || [];
  }, [clients]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="mt-6 bg-[#1e1e1e]/70 backdrop-blur-md p-6 rounded-xl shadow-xl border border-[#4b5563]">
      <h2 className="text-2xl font-semibold text-white mb-4">Recent Clients</h2>

      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full border border-[#4b5563] text-white text-sm overflow-hidden rounded-md">
          <thead className="bg-[#2c2c2c] text-gray-200">
            <tr>
              <th className="border border-[#4b5563] px-4 py-3 text-left">Name</th>
              <th className="border border-[#4b5563] px-4 py-3 text-left">Email</th>
              <th className="border border-[#4b5563] px-4 py-3 text-left">Added</th>
              <th className="border border-[#4b5563] px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentClients.length > 0 ? (
              recentClients.map((client, index) => (
                <tr key={index} className="hover:bg-[#ffffff0d] transition duration-200">
                  <td className="border border-[#4b5563] px-4 py-3">{client.name}</td>
                  <td className="border border-[#4b5563] px-4 py-3">{client.email}</td>
                  <td className="border border-[#4b5563] px-4 py-3">
                    {new Date(client.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border border-[#4b5563] px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        client.status == "true"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {client.status=="true"?"Active":"Inactive"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  No recent clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentClients;
