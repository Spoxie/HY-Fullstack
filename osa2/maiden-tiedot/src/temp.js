import { useEffect, useState } from "react";

import axios from "axios";

function Temp(props) {
  const [temp, setTemp] = useState();
  const [wind, setWind] = useState();
  const [icon, setIcon] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/weather?lat=${props.latlong[0]}&lon=${props.latlong[1]}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        setTemp(response.data.main.temp);
        setWind(response.data.wind.speed);
        setIcon(response.data.weather[0].icon);
      });
  }, [props.latlong, API_KEY]);

  return (
    <div>
      <p key={temp}>Temperature: {temp} Celsius</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weathericon"
      />
      <p key={wind}>wind {wind} m/s</p>
    </div>
  );
}
export default Temp;
