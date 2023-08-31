import { useState } from "react";
import { resultingClientExists } from "workbox-core/_private";
const Weather=()=>{
const [report,setReport]=useState('');
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f7fb53abbmsh0f30156d8f2cb6dp1a44f6jsn6e9187b53f96',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
    const fetching=async function(){
	const response = await fetch(url, options);
	const result = await response.json()
    setReport(result);
    }
    fetching();
} catch (error) {
	console.error(error);
}
return <div><img src={`${report.current.condition.icon}`}/></div>

}
export default  Weather;