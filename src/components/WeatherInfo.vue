<template>
  <div class="p-2 w-full h-full bg-slate-50 rounded-2xl">
    <ul class="grid grid-cols-2 gap-4">
      <li>
        <span class="block">Humidity:</span>
        <span class="block">
          {{ cities[0].humidity }}
          <span>&#37;</span>
        </span>
      </li>
      <li>
        <span class="block">Visibility:</span>
        <span class="block">
          {{ cities[0].visibility / 1000 }}
          <span>km</span>
        </span>
      </li>
      <li>
        <span class="block">Pressure:</span>
        <span class="block">
          {{ cities[0].pressure }}
          <span>hPa</span>
        </span>
      </li>
      <li>
        <span class="block">Wind speed:</span>
        <span class="block">
          {{ cities[0].wind.speed }}
          <span>m/s</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCitiesStore } from '@/stores/cities';
import { storeToRefs } from 'pinia';

const store = useCitiesStore();
const { cities } = storeToRefs(store);

</script>