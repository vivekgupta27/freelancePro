import { Link } from "react-router-dom";
import { IoNewspaperOutline } from "react-icons/io5";

const Proposals = ({ toggle }) => {
  return (
    <Link to={"/proposals"} className="flex items-center gap-2 text-lg py-2 px-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-md">
      <IoNewspaperOutline size={22} />
      <span
        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 w-auto ml-1" : "opacity-0 w-0"
        }`}
      >
        Proposals
      </span>
    </Link>
  );
};

export default Proposals;
