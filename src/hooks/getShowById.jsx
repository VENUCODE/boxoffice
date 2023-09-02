import { useEffect,useState } from "react";
import { getShowById } from "../api/tvmaze";

const useShowById=(showId)=>{
    const [showData,setShowData]=useState(null)
    const [showError,setShowError]=useState(null)
    useEffect(() => {
        async function fetchData() {
          try {
            const data = await getShowById(showId);
            setShowData(data);
          } catch (error) {
            setShowError(error);
          }
        }
    
        fetchData();
      }, [showId]);
      return [showError,showData];
}
export default useShowById;