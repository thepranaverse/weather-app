import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);

  const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const API_KEY = "3eb47352f9ff21da7e3462ec50f8643d";

  let getWeatherInfo = async () => {
    try {
      // Step 1: Get lat/lon
      let geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );
      let geoData = await geoRes.json();

      if (geoData.length === 0) {
        console.log("City not found");
        return null;
      }

      let { lat, lon } = geoData[0];

      // Step 2: Get weather using lat/lon
      let weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      let weatherJson = await weatherRes.json();

      // result objet to print specific data on weather page
      let result = {
        city: city,
        temp: weatherJson.main.temp,
        tempMin: weatherJson.main.temp_min,
        tempMax: weatherJson.main.temp_max,
        humidity: weatherJson.main.humidity,
        feelsLike: weatherJson.main.feels_like,
        weather: weatherJson.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setcity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    setcity(""); // clear input
    seterror(false); // clear previous error

    let newInfo = await getWeatherInfo();
    if (!newInfo) {
      seterror(true); // trigger error message display
    } else {
      updateInfo(newInfo); // only update if data is valid
    }
  };
  

  return (
    <>
      <div className="SearchBox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" type="Submit">
            Search
          </Button>
          {error && (
            <p style={{ color: "red" }}>
              Data is not available for such place!
            </p>
          )}
        </form>
      </div>
    </>
  );
}
