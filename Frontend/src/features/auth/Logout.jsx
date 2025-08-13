import {useContext} from 'react';
import { TbLogout } from "react-icons/tb";
import { UserContext } from '../../shared/ClientRedux';
import { useNavigate } from 'react-router-dom';

const Logout = ({ toggle }) => {
  const {logout,setAuthenticated,setUserInfo}=useContext(UserContext);
  const navigate=useNavigate();
  const handleLogout = async () => {
    console.log("hi")
    try {
      const res = await logout();
      if (res.status === 200) {
        setAuthenticated(false);
        setUserInfo(null);
        navigate("/");
      }
    } catch (error) { 
      console.log(error);
    }
  };
  return (
    <div className="flex items-center gap-2 font-semibold text-lg py-2 px-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-md cursor-pointer mt-5">
      <TbLogout size={22} />
      <span onClick={() => handleLogout()}
        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 w-auto ml-1" : "opacity-0 w-0"
        }`}
      >
        Logout
      </span>
    </div>
  );
};

export default Logout;
