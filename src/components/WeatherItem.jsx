import moment from 'moment';
import 'moment/locale/uk';
import styles from './weather.module.css';

moment.locale('uk');

const WeatherItem = ({ date, temp: { day, min, max }, icon }) => {
  const formattedDate = moment(date, 'DD/MM/YYYY').format('dddd DD MMMM YYYY');
  const url = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png`;

  return (
    <div className={styles.weatherItem}>
      <p>date: {formattedDate}</p>
      <img src={url} alt="icon" />
      <p>day: {day} °C</p>
      <p>min temp: {min} °C</p>
      <p>max temp: {max} °C</p>
    </div>
  );
};

export default WeatherItem;
