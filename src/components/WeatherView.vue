<template>
  <div>

    <div v-if="error" class="mb-4 text-center text-red-600">
      {{ error }}
    </div>

    <div>
      <WeatherMain v-if="cities.length" />
      <SkeletonWeatherMain v-else class="animate-pulse" />
    </div>

    <WeatherCities v-if="cities.length" class="mt-4" />
    <SkeletonWeatherCities v-else class="animate-pulse mt-4" />

    <div class="mt-3 min-h-[1.4rem]">
      <WeatherCredits />
      <div class="mt-1 flex items-center justify-between">
        <button class="w-6 h-6 flex items-center justify-center group" @click="refreshWeather">
          <ArrowPathIcon
            class="w-full h-full text-slate-800"
            :class="{ 'animate-spin': isUpdating }"
          />
        </button>
        <button class="w-6 h-6 flex items-center justify-center hover:rotate-12 transition-transform"
          @click="$emit('changeComponent', WeatherSettings)">
          <Cog8ToothIcon class="w-full h-full text-slate-800" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import WeatherMain from '@/components/WeatherMain.vue';
import WeatherCities from '@/components/WeatherCities.vue';
import WeatherCredits from '@/components/WeatherCredits.vue';
import WeatherSettings from '@/components/WeatherSettings.vue';

import SkeletonWeatherMain from '@/components/Skeleton/SkeletonWeatherMain.vue';
import SkeletonWeatherCities from '@/components/Skeleton/SkeletonWeatherCities.vue';

import { Cog8ToothIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';
import { useCitiesStore } from '@/stores/cities';
import { storeToRefs } from 'pinia';

import useGeolocation from '@/composables/useGeolocation';
import addCity from '@/composables/addCity';
import useUpdateWeather from '@/composables/useUpdateWeather';

const store = useCitiesStore();
const { cities } = storeToRefs(store);
const { coords, error } = useGeolocation();
const { updateWeather, isUpdating } = useUpdateWeather();

const refreshWeather = async () => {
  await updateWeather();
};

watch(coords, (newCoords) => {

  if (localStorage.getItem('cities')) {
    const savedCities = JSON.parse(localStorage.getItem('cities'));

    const savedCity = savedCities.some(item => {
      return (item.lat).toFixed(0) === (newCoords.latitude).toFixed(0) && (item.lon).toFixed(0) === (newCoords.longitude).toFixed(0);
    });

    if (savedCity) return;
  }
  addCity(newCoords.latitude, newCoords.longitude);

});

</script>