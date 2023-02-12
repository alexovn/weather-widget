import { useCitiesStore } from '@/stores/cities';
import useSearch from '@/composables/useSearch';

const addCity = async (lat, lon) => {
  const store = useCitiesStore();
  const { search } = useSearch();
  
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  // const forecastUrl = ``;

  const searchData = await search(url);
  // const forecastData = await search(forecastUrl);

  const {
      id,
      name,
      main,
      weather,
      wind,
      visibility,
      coord
  } = searchData;

  store.$patch((state) => {
    state.cities.push({
      id,
      name,
      coord,
      temp: main.temp,
      tempMin: main.temp_min,
      tempMax: main.temp_max,
      humidity: main.humidity,
      pressure: main.pressure,
      weather: {
        icon: weather[0].icon,
        description: weather[0].main,
      },
      wind: {
        speed: wind.speed
      },
      visibility,
      // forecast: forecastData.list
    });
  });
};

export default addCity;