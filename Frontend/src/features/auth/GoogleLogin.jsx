// GoogleLoginButton.js
import {useContext} from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../shared/ClientRedux";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const {setUserInfo,setAuthenticated}=useContext(UserContext);

  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    try {
      const res = await fetch("http://localhost:3000/api/auth/google-login", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
      });

      const data = await res.json();
      console.log( data);
       if(data){
        setAuthenticated(true);
        setUserInfo(data.user);
         navigate("/dashboard");
       }else{
        navigate("/signin");
       }
      // Save token to localStorage or context
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <GoogleLogin 
      
      onSuccess={handleSuccess}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
