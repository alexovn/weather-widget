import { createApp, watch } from "vue";
import { createPinia, storeToRefs } from "pinia";
import App from "./App.vue";

import useSearch from '@/composables/useSearch';
import { useCitiesStore } from "./stores/cities";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const store = useCitiesStore();
const { cities } = storeToRefs(store);

if (localStorage.getItem('cities')) {

  const cities = JSON.parse(localStorage.getItem('cities'));
  const { search } = useSearch();
  
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
}

watch(() => cities.value, (state) => {

  const arr = [];

  state.forEach(item => {
    arr.push(item.coord);
  });

  localStorage.setItem('cities', JSON.stringify(arr));
}, { deep: true });

app.mount("#app");