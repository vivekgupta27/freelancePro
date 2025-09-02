import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setChange } from "../../Redux/states/signupSlice";
import { toast } from "react-toastify";

const GoogleSignUpButton = () => {
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch("http://localhost:3000/api/auth/google-register", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: tokenResponse.access_token }), // Use access_token
        });

        const data = await res.json();
        if (data.message === "Register success") {
          dispatch(setChange(true));
          toast.success("Registration successful 🎉", {
            autoClose: 2500,
          });
        } else {
          toast.error(data.message || "Google signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Signup failed:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    },
    onError: () => {
      console.log("Signup Failed");
      toast.error("Google signup failed. Please try again.");
    },
    flow: "implicit", // Changed to implicit
  });

  return (
    <button
      onClick={() => login()}
      className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-full"
    >
      Sign up with Google
    </button>
  );
};

export default GoogleSignUpButton;
