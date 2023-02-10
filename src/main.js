import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

if(localStorage.getItem('cities')) {
  pinia.state.value.cities = JSON.parse(localStorage.getItem('cities'));
}

watch(() => pinia.state.value.cities, (state) => {
  localStorage.setItem('cities', JSON.stringify(state));
}, { deep: true });

app.use(pinia);
app.mount("#app");