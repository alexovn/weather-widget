import { ref } from 'vue';
import useSearch from '@/composables/useSearch';
import { useCitiesStore } from '@/stores/cities';
const isUpdating = ref(false);

const updateWeather = async () => {
  const store = useCitiesStore();
  
  if (localStorage.getItem('cities')) {
    const cities = JSON.parse(localStorage.getItem('cities'));
    const { search } = useSearch();

    isUpdating.value = true;

    const addCities = async () => {
      const arr = [];

      for await (const city of cities) {
        const searchData = await search(city.lat, city.lon);
        const {
          id,
          name,
          main,
          weather,
          wind,
          visibility,
          coord
        } = searchData;

        arr.push({
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
          visibility
        });
      }
      
      return arr;
    };
    
    const citiesArr = await addCities();
    
    store.updateCities(citiesArr);
    isUpdating.value = false;
  }
};

const useUpdateWeather = () => {
  return {
    updateWeather,
    isUpdating
  }
}

export default useUpdateWeather;