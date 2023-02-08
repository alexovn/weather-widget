<template>
  <div>
    <button class="ml-auto w-6 h-6 flex items-center justify-center hover:rotate-45 translate-transform"
      @click="$emit('changeComponent', WeatherView)">
      <XCircleIcon class="w-full h-full" />
    </button>

    <div>
      <UiInput
        v-model="citySearch"
        id="search-city"
        placeholder="Location name"
        label="Add location:"
        @keyup.enter="addCity"
      >
        <UiButtonDefault name="Add" @click="addCity" />
      </UiInput>
    </div>

    <WeatherCitiesList v-if="cities.length" @deleteItem="deleteCity" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCitiesStore } from '@/stores/cities';
import { storeToRefs } from 'pinia';
import { XCircleIcon } from '@heroicons/vue/24/outline';

import WeatherView from '@/components/WeatherView.vue';
import WeatherCitiesList from '@/components/WeatherCitiesList.vue';

import UiInput from '@/components/Ui/UiInput.vue';
import UiButtonDefault from '@/components/Ui/Button/UiButtonDefault.vue';

import useGeocoding from '@/composables/useGeocoding';
import useSearch from '@/composables/useSearch';

const store = useCitiesStore();
const citySearch = ref('');

const { cities } = storeToRefs(store);

const addCity = async () => {

  const { geocoding } = useGeocoding();
  const geocodingData = await geocoding(citySearch.value);
  const { lat, lon } = geocodingData[0];

  const { error, search } = useSearch();
  const searchData = await search(lat, lon);

  console.log(searchData);

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

  citySearch.value = '';
};

const deleteCity = (idx) => {
  store.$patch((state) => {
    state.cities.splice(idx, 1);
  });
};

</script>