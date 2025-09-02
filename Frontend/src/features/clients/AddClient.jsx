import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    status: 'false',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/client/create_client",
        formData,
        { withCredentials: true }
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        status: 'false',
      });

      toast.success("✅ Client added successfully!");
      console.log("Client added:", res.data);
    } catch (error) {
      toast.error("❌ Failed to add client. Try again!");
      console.error("Failed to add client:", error);
    }
  };

  return (
    <div className="w-full h-full text-white">
      <h1 className="text-3xl font-bold mb-6">Add New Client</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full bg-[#2a2a2a] p-6 rounded-xl shadow-lg"
      >
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone", type: "text" },
          { label: "Company", name: "company", type: "text" }
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="text-sm font-medium text-gray-300">{label}</label>
            <input
              id={name}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              required
              className="bg-[#1c1c1c] border border-[#444] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>
        ))}

        {/* Status Select */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="status" className="text-sm font-medium text-gray-300">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="bg-[#1c1c1c] border border-[#444] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full appearance-none"
          >
            <option value="true" className="bg-[#2a2a2a] text-white">Active</option>
            <option value="false" className="bg-[#2a2a2a] text-white">Inactive</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition w-full"
        >
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClient;
