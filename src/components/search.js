import React,{ useState, useEffect} from 'react';
import WeatherCard from './weathercard'
import Searchicon from '../assets/search-icon.png'
import Table from './table'
import axios from 'axios';

const Search=()=> {
const [Weather, setWeather]=useState('')
const [params, setparams]=useState('Vadodara')
const [place, setPlace]=useState('')
const [region, setRegion]=useState('')
const [humidity, sethumidity]=useState('')
const [windspeed, setwindspeed]=useState('')
const [overall, setoverall]=useState('')
const [uv, setuv]=useState('')
const [country, setcountry]=useState('')
const [localtime, setlocaltime]=useState('')
const [lastupdated, setlastupdated]=useState('')
useEffect(() => Weatherapi());
  const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q:`${params}`},
        headers: {
          'X-RapidAPI-Key': '9f7c760327mshd4c0b7c94270680p141641jsn6313e25678e0',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      
        }
      };

  const changeparams=(event)=>{
      setparams(event.target.value)
  }       

  const Weatherapi=(response)=>{                             
        axios.request(options).then(function(response){
        setWeather(response.data.current.temp_c);
        console.log(response.data)
        setRegion(response.data.location.region)
        setPlace(response.data.location.name)
        sethumidity(response.data.current.humidity)
        setwindspeed(response.data.current.wind_kph)
        setoverall(response.data.current.condition.text)
        setuv(response.data.current.uv)
        setcountry(response.data.location.country)
        setlocaltime(response.data.location.localtime)
        setlastupdated(response.data.current.last_updated)       
      }) 
  }
  return (
    <div className="searchbar">

    	<div className="searchbar2">
    		<input type="text" placeholder="Search Location" onChange={changeparams}></input>
    		<button onClick={Weatherapi}><img src={Searchicon} className="searchimg"/></button>
    	</div>
            <WeatherCard Weather={Weather} place={place} region={region} humidity={humidity} windspeed={windspeed}/>
            <Table place={place} overall={overall} uv={uv} country={country} localtime={localtime} lastupdated={lastupdated}/>
    </div>
  );
}

export default Search;