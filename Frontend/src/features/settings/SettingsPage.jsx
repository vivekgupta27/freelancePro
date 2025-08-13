import React, { useState } from 'react';

const Settings = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    theme: 'dark',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Settings:', formData);
    // send data to backend (if applicable)
  };

  return (
    <div className="w-full h-full text-white  ">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#2a2a2a] p-6 rounded-xl flex flex-col gap-6 w-full shadow-lg"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#1c1c1c] border border-[#444] px-4 py-2 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
            type="text"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#1c1c1c] border border-[#444] px-4 py-2 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
            type="email"
          />
        </div>

       

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-300">
            New Password
          </label>
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-[#1c1c1c] border border-[#444] px-4 py-2 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
            type="password"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
