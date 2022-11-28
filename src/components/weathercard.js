import React from 'react';
import Search from './search'


const WeatherCard=({Weather,place,region,humidity,windspeed})=>{
	return(
		<div className='WeatherCard'>
			<div id="weather_wrapper">
				<div className="weatherCard">
					<div className="currentTemp">
						<span className="temp">{Weather}&#8451;</span>
						<span className="location">{place}</span>
						<span className="region">{region}</span>
					</div>
					<div className="currentWeather">
						<span className="conditions">&#xf00d;</span>
						<div className="info">
							<span className="rain">{humidity} Humidity</span>
							<span className="wind">{windspeed} KPH</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
}

export default WeatherCard;