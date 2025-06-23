import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ Info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1667662786108-8fe72198def2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJva2VuJTIwY2xvdWRzJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="infoBox">
      <h2>Weather Info - {Info.weather}</h2>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              Info.humidity > 80
                ? RAIN_URL
                : Info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city}{" "}
              {Info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : Info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Tempreture = {Info.temp}&deg;C</div>
              <br />
              <div>Humidity = {Info.humidity}</div>
              <p>Min Temp = {Info.tempMin}&deg;C</p>
              <p>Max Temp= {Info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <i>{Info.weather}</i> & Feels
                like {Info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
