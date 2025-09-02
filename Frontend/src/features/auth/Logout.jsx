import { TbLogout } from "react-icons/tb";
import { useLogoutMutation } from "../../Redux/apiState/signuapi";
import { logout } from "../../Redux/states/userSlice";
import { useDispatch } from "react-redux";
import { persistor } from "../../Redux/store";
import { toast } from "react-toastify";

const Logout = ({ toggle }) => {
  const dispatch = useDispatch();
  const [logoutUser, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const res = await logoutUser().unwrap();
      console.log(res);

      dispatch(logout()); // Reset Redux state
      persistor.purge(); // Clear persisted state

      toast.success("You have been logged out successfully 👋", {
        autoClose: 2000,
      });
      console.log("Logged out via RTK Query");
    } catch (err) {
      console.log(err);
      toast.error("Logout failed. Please try again.", {
        autoClose: 2500,
      });
    }
  };

  return (
    <div
      className="flex items-center gap-2 font-semibold text-lg py-2 px-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-md cursor-pointer mt-5"
      onClick={handleLogout}
    >
      <TbLogout size={22} />
      <span
        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 w-auto ml-1" : "opacity-0 w-0"
        }`}
      >
        {isLoading ? "Logging out..." : "Logout"}
      </span>
    </div>
  );
};

export default Logout;
