import Dashboard from "../../features/dashboard/Dashboard"
import Clients from "../../features/clients/Clients"
import Proposals from '../../features/proposals/Proposals'
import Logout from '../../features/auth/Logout'
import Settings from '../../features/settings/Settings'
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";


const Sidebar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      className={`transition-all duration-500 ease-in-out h-full bg-[#292828] text-white rounded py-4 px-2 flex flex-col  justify-between ${
        toggle ? "w-52" : "w-16"
      }`}
    >
      {/* Top section */}
   <div
  className={`flex items-center mb-6 ${
    toggle ? "justify-between " : "justify-center pr-2"
  }`}
>
  {toggle && <span className="text-lg font-semibold pl-2">FreelanceCRM</span>}
  <MdOutlineMenu
    onClick={() => setToggle(!toggle)}
    className="cursor-pointer text-2xl"
  />
</div>


      {/* Menu section */}
      <div className="flex flex-col gap-6 font-semibold  cursor-pointer flex-grow">
        <Dashboard toggle={toggle} />
        <Clients toggle={toggle} />
        <Proposals toggle={toggle} />
        <Settings toggle={toggle} />
      </div>

      {/* Bottom - Logout */}
      <div>
        <Logout toggle={toggle} />
      </div>
    </div>
  );
};

export default Sidebar;
