import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  const [weatherInfo, setweatherInfo] = useState({
    city: "Mumbai",
    feelsLike: 35.66,
    humidity: 88,
    temp: 28.72,
    tempMax: 28.72,
    tempMin: 28.72,
    weather: "broken clouds",
  });

  let updateInfo = (newInfo) => {
    //this prints/sets the weather object as per searchbox info
    setweatherInfo(newInfo);
  };

  return (
    <div>
      <h2>Weather App By Pranay</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox Info={weatherInfo} /> {/**passing info as props**/}
    </div>
  );
}
