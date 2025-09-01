
import { TbLogout } from "react-icons/tb";

import { useLogoutMutation } from '../../Redux/apiState/signuapi';
import {logout} from '../../Redux/states/userSlice'
import {useDispatch} from 'react-redux'
import { persistor } from '../../Redux/store';

const Logout = ({ toggle }) => {

  const dispatch=useDispatch()
  const  [logoutUser, { isLoading, isError }]=useLogoutMutation()

  const handleLogout = async () => {
     try {
       const res=await logoutUser().unwrap();
       console.log(res); 
      dispatch(logout());          // Reset Redux state
      persistor.purge();           // Clear persisted state
      console.log('Logged out via RTK Query');

     } catch ( err) {
      console.log(err);
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
