import React, { useEffect, useState } from 'react';

import {useSelector,useDispatch} from 'react-redux'
import { useSettingsMutation } from '../../Redux/apiState/signuapi';
import { setName,setEmail,setNewPassword,setOldPassword } from '../../Redux/states/settingSlice';
import { userData } from '../../Redux/states/userSlice';
import { useNavigate } from 'react-router-dom';
const Settings = () => {

const {userInfo}=useSelector((state)=>state.userState)
const navigate=useNavigate();
useEffect(()=>{
  dispatch(setName(userInfo.name));
  dispatch(setEmail(userInfo.email));
},[])
const dispatch=useDispatch();
  // const [formData, setFormData] = useState({
  //   name: 'John Doe',
  //   email: 'john@example.com',
  //   password: '',
  //   newPassword: '',
  // });
   const [settingFn,{isError,isLoading,isSuccess}]=useSettingsMutation()
  const formData=useSelector((state)=>state.settingState)
  const handleSubmit = async(e) => {
    e.preventDefault();
     try {
        const res=await settingFn(formData).unwrap()
        dispatch(userData(res.user));
        if(res){
        navigate('/dashboard');
        }
     } catch (error) {
       console.log(error)
     }
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
            readOnly
            value={formData.name}
            onChange={(e)=>dispatch(setName(e.target.value))}
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
            readOnly
            value={formData.email}
            onChange={(e)=>dispatch(setEmail(e.target.value))}
            className="bg-[#1c1c1c] border border-[#444] px-4 py-2 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
            type="email"
          />
        </div>

       

        {/* Password */}
        {userInfo.authProvider==="google"?"":<div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="oldPassword" className="text-sm font-medium text-gray-300">
              Current Password
            </label>
            <input
              id="oldPassword"
              name="oldPassword"
              required
              value={formData.oldPassword}
              onChange={(e)=>dispatch(setOldPassword(e.target.value))}
              className="bg-[#1c1c1c] border border-[#444] px-4 py-2 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
              type="password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-300">
              New Password
            </label>
            <input
              id="password"
              name="password"
              required
              value={formData.newPassword}
              onChange={(e)=>dispatch(setNewPassword(e.target.value))}
              className="bg-[#1c1c1c] border border-[#444] px-4 py-2 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
              type="password"
            />
          </div>
        </div>}

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
