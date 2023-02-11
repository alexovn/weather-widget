import { createApp, watch } from "vue";
import { createPinia, storeToRefs } from "pinia";
import App from "./App.vue";

import useUpdateWeather from '@/composables/useUpdateWeather';
import { useCitiesStore } from "./stores/cities";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const store = useCitiesStore();
const { cities } = storeToRefs(store);
const { updateWeather } = useUpdateWeather()

const refreshWeather = async () => {
  await updateWeather();
};

refreshWeather();

watch(() => cities.value, (state) => {

  const arr = [];

  state.forEach(item => {
    arr.push(item.coord);
  });

  localStorage.setItem('cities', JSON.stringify(arr));
}, { deep: true });

app.mount("#app");