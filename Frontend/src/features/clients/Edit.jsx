import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';   // ✅ Import toast

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const client = location.state?.client;

  const [formdata, setFormdata] = useState({
    name: client?.name || '',
    email: client?.email || '',
    phone: client?.phone || '-',
    company: client?.company || '-',
    status: client?.status || false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3000/api/client/update_client/${client._id}`,
        formdata,
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success("✅ Client updated successfully!");  // ✅ Success toast
        navigate('/clients');
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to update client. Please try again."); // ✅ Error toast
    }
  };

  return (
    <div className="w-full h-full text-white">
      <h1 className="text-3xl font-bold mb-6 text-white">Edit Client Details</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full bg-[#2a2a2a] p-6 rounded-xl shadow-lg"
      >
        {/* Name */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formdata.name}
            required
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
            className="bg-[#1c1c1c] border border-[#444] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formdata.email}
            onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
            className="bg-[#1c1c1c] border border-[#444] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="phone" className="text-sm font-medium text-gray-300">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            value={formdata.phone}
            onChange={(e) => setFormdata({ ...formdata, phone: e.target.value })}
            className="bg-[#1c1c1c] border border-[#444] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="company" className="text-sm font-medium text-gray-300">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formdata.company}
            onChange={(e) => setFormdata({ ...formdata, company: e.target.value })}
            className="bg-[#1c1c1c] border border-[#444] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="status" className="text-sm font-medium text-gray-300">
            Status
          </label>
          <select
            name="status"
            id="status"
            required
            value={formdata.status === "true" ? "true" : "false"}
            onChange={(e) =>
              setFormdata({ ...formdata, status: e.target.value === "true" ? "true" : "false" })
            }
            className="bg-[#1c1c1c] border border-[#444] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full appearance-none"
          >
            <option value="false" className="bg-[#2a2a2a] text-white">
              Inactive
            </option>
            <option value="true" className="bg-[#2a2a2a] text-white">
              Active
            </option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 ease-in-out cursor-pointer w-full"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
