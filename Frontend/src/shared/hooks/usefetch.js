
import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch(url){
 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
     useEffect(()=>{
        const fetchData=async()=>{
                     try {
            const response = await axios.get(url,{
                withCredentials: true,
            });
            setData(response.data);
            setLoading(false);
                  
         } catch (err){
            console.log(err);
            setError(err);
            setLoading(false);
         
         }
         finally{
            setLoading(false);
         }
         }
         fetchData();
     },[])

     return {data, loading, error};
}
