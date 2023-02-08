import { useCitiesStore } from '@/stores/cities';
import useSearch from '@/composables/useSearch';

const addCity = async (lat, lon) => {
  const store = useCitiesStore();
  const { search } = useSearch();

  const searchData = await search(lat, lon);

  const {
      id,
      name,
      main,
      weather,
      wind,
      visibility
  } = searchData;

  store.$patch((state) => {
    state.cities.push({
      id,
      name,
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
      visibility
    });
  });
};

export default addCity;