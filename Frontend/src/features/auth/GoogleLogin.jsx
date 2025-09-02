// GoogleLoginButton.js
import { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../shared/ClientRedux";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/states/userSlice";
import { toast } from "react-toastify";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { setUserInfo, setAuthenticated } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    try {
      const res = await fetch("http://localhost:3000/api/auth/google-login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      console.log(data);

      if (data?.user) {
        dispatch(login(data.user));
        toast.success(`Welcome back, ${data.user.name || "User"} 👋`, {
          autoClose: 2500,
        });
        navigate("/dashboard");
      } else {
        toast.error("Google login failed. Please try again.");
        navigate("/signin");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        console.log("Login Failed");
        toast.error("Google login failed. Please try again.");
      }}
    />
  );
};

export default GoogleLoginButton;
