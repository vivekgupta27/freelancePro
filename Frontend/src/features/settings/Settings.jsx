import { Link } from "react-router-dom";
import { IoSettings } from "react-icons/io5";

const Settings = ({ toggle }) => {
  return (
    <Link to={"/settings"} className="flex items-center gap-2 text-lg py-2 px-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-md">
      <IoSettings size={22} />
      <span
        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 w-auto ml-1" : "opacity-0 w-0"
        }`}
      >
        Settings
      </span>
    </Link>
  );
};

export default Settings;
