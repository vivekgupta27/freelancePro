import { createContext ,useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext=createContext();


const UserProvider=({children})=>{
    const navigate=useNavigate();
    const [userInfo,setUserInfo]=useState(null);
      const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

 
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


  // useEffect(() => {
  //   checkSession();
  // }, []);


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
        <UserContext.Provider value={{authenticated,setAuthenticated,loading,userInfo,setUserInfo,logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;