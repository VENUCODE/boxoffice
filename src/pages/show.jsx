import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { getShowById } from "../api/tvmaze";
const Show=()=>{
    const {showId}=useParams()
    useEffect(()=>{
        async function fetchData(){
            const data=await getShowById(showId);
            console.log(data)
        }
        fetchData()
    },[showId])

    return <div> show details</div>
}
export default Show;