import WeatherItem from "./WeatherItem";
import styles from "./weather.module.css";
let n = 0;
const WeatherItems = ({ items }) => (
  <div className={styles.weatherItems}>
    {items.map(({ dt, temp, weather }) => {
      let date = new Date(Date.now() + 24 * 3600 * 1000 * n);

      const { icon } = weather[0];
      n++;
      return <WeatherItem key={dt} date={date} temp={temp} icon={icon} />;
    })}
  </div>
);

export default WeatherItems;
