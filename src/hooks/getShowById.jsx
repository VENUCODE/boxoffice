// import { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
const useShowById = showId => {
  // useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const data = await getShowById(showId);
  //         setShowData(data);
  //       } catch (error) {
  //         setShowError(error);
  //       }
  //     }

  //     fetchData();
  //   }, [showId]);
  const { data: showData, error: showError } = useQuery(['show', showId], () =>{
    console.log(showId)
    return getShowById(showId)
  }
    
  );
  return [showError, showData];
};
export default useShowById;
