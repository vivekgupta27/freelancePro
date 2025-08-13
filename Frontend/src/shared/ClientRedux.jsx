import { createContext ,useEffect,useState} from "react";
import {data} from '../shared/constants/Data'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext=createContext();


const UserProvider=({children})=>{
    const navigate=useNavigate();
    const [userInfo,setUserInfo]=useState(null);
    const [user,setUser]=useState([...data]);
      const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

  const checkAuth = async (formData) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login",formData, {
        withCredentials: true, // Important!
      });
      setAuthenticated(true);
      return res;
      // optionally set user data too
    } catch (error) {
      setAuthenticated(false);
    }
  };
 const checkSession = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/auth/me", {
        withCredentials: true,
      });
     
              if (res.status === 200) {
        setAuthenticated(true);
        setUserInfo(res.data.user);
        console.log(res.data.user);
      }
   
      // setUser(res.data.user) // if needed
    } catch (error) {
      setAuthenticated(false);
    }
     finally {
      setLoading(false); // <- ✅ Must update
    }
  };
  const SignUp=async(formData)=>{
    try {
      const res=await axios.post("http://localhost:3000/api/auth/register",formData,{
        withCredentials:true
      })
      return res;
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkSession();
  }, []);


 const logout=async()=>{
  try{
    const res=await axios.get("http://localhost:3000/api/auth/logout",{
      withCredentials:true
    })
    return res;
  }catch(error){
    console.log(error);
  }
 }


    return (
        <UserContext.Provider value={{user,setUser,authenticated,setAuthenticated,checkAuth,loading,SignUp,userInfo,setUserInfo,logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;