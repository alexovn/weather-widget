<template>
  <div class="p-4 w-full h-full bg-slate-300 rounded-2xl overflow-hidden">
    <swiper :slides-per-view="3" :space-between="10" style="overflow: visible;">
      <swiper-slide
        class="p-2 w-[6rem] h-[6rem] shrink-0 bg-slate-200 rounded-2xl hover:bg-slate-400 transition-colors cursor-pointer"
        v-for="city in cities" :key="city.id">
        <div class="mb-1 flex items-start justify-between">
          <div class="w-[1rem] h-[1rem]">
            <component class="w-full h-full" :is="currentConditionIcon"></component>
          </div>
          <div class="max-w-[3.3rem] text-[0.7rem] text-right">
            <div class="font-medium truncate">
              {{ city.name }}
            </div>
            <div class="text-[0.5rem]">
              {{ city.condition }}
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-start">
            <span class="text-2xl font-medium">
              {{ city.temp }}
            </span>
            <span class="text-2xl">&#176;</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="flex items-start">
              <span class="text-[0.7rem]">
                {{ city.maxTemp }}
              </span>
              <span class="text-[0.7rem]">&#176;</span>
            </div>
            <div class="flex items-start">
              <span class="text-[0.7rem]">
                {{ city.minTemp }}
              </span>
              <span class="text-[0.7rem]">&#176;</span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import IconCloudy from '@/components/Icon/IconCloudy.vue';
import 'swiper/css';

const currentConditionIcon = shallowRef(IconCloudy);

const cities = ref([
  {
    id: 1,
    icon: '',
    name: 'Yekaterinburg',
    condition: 'cloudy',
    temp: '19',
    maxTemp: '21',
    minTemp: '14'
  },
  {
    id: 2,
    icon: '',
    name: 'Moscow',
    condition: 'cloudy',
    temp: '30',
    maxTemp: '32',
    minTemp: '26'
  },
  {
    id: 3,
    icon: '',
    name: 'Fethiye',
    condition: 'cloudy',
    temp: '35',
    maxTemp: '36',
    minTemp: '28'
  },
  {
    id: 4,
    icon: '',
    name: 'Rome',
    condition: 'cloudy',
    temp: '33',
    maxTemp: '34',
    minTemp: '31'
  },
]);

</script>