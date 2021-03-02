// import moment from "moment";
import WeatherItem from "./WeatherItem";
import styles from "./weather.module.css";

const WeatherItems = ({ items }) => (
  <div className={styles.weatherItems}>
    {items.map(({ dt, temp, weather }) => {
      let n = 0;
      let date = new Date(Date.now() + 24 * 3600 * 1000 * n);
      n = +1;
      const { icon } = weather[0];

      return <WeatherItem key={dt} date={date} temp={temp} icon={icon} />;
    })}
  </div>
);

export default WeatherItems;
