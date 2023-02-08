<template>
  <ul class="p-2 grid grid-cols-2 gap-4 w-full h-full bg-slate-50 rounded-2xl">
    <li>
      <span class="block">Humidity:</span>
      <span class="block">
        {{ weatherInfo.humidity }}
        <span>&#37;</span>
      </span>
    </li>
    <li>
      <span class="block">Visibility:</span>
      <span class="block">
        {{ weatherInfo.visibility }}
        <span>km</span>
      </span>
    </li>
    <li>
      <span class="block">Pressure:</span>
      <span class="block">
        {{ weatherInfo.pressure }}
        <span>hPa</span>
      </span>
    </li>
    <li>
      <span class="block">Wind speed:</span>
      <span class="block">
        {{ weatherInfo.windSpeed }}
        <span>m/s</span>
      </span>
    </li>
  </ul>
</template>

<script setup>
import { useCitiesStore } from '@/stores/cities';
import { storeToRefs } from 'pinia';

const store = useCitiesStore();
const { cities } = storeToRefs(store);

const weatherInfo = {
  humidity: cities.value[0]?.humidity,
  visibility: cities.value[0]?.visibility,
  pressure: cities.value[0]?.pressure,
  windSpeed: cities.value[0]?.wind?.speed
};


</script>