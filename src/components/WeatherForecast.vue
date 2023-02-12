<template>
  <div class="p-4 w-full min-h-[8rem] bg-slate-200 rounded-2xl">
    <div :class="['overflow-hidden transition-max-height ease-in-out duration-300', isExpand ? 'max-h-[20rem]' : 'max-h-[8rem]']">
      <ul class="divide-y divide-slate-400">
        <li class="[&:not(:last-child)]:mb-2 [&:not(:first-child)]:pt-2 flex items-center justify-between"
          v-for="item of forecast" :key="item.id">
          <span>{{ item.date }}</span>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-[0.5rem]">
              <div class="flex items-start">
                <span class="text-xl">
                  {{ item.maxTemp }}
                </span>
                <span class="text-xl">&#176;</span>
              </div>
              <div class="flex items-start">
                <span class="text-xl">
                  {{ item.minTemp }}
                </span>
                <span class="text-xl">&#176;</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-2 flex justify-center">
      <button
        class="w-6 h-6 flex items-center justify-center group"
        @click="toggleSpoiler"
      >
        <PlusCircleIcon v-if="!isExpand" class="w-full h-full text-slate-500 group-hover:text-slate-600 transition-colors" />
        <MinusCircleIcon v-else class="w-full h-full text-slate-500 group-hover:text-slate-600 transition-colors" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PlusCircleIcon } from '@heroicons/vue/24/solid';
import { MinusCircleIcon } from '@heroicons/vue/24/solid';

const isExpand = ref(false);

const toggleSpoiler = () => {
  isExpand.value = !isExpand.value;
};

const forecast = ref([
  {
    id: 1,
    icon: '',
    date: 'Tuesday',
    maxTemp: '20',
    minTemp: '15'
  },
  {
    id: 2,
    icon: '',
    date: 'Wensday',
    maxTemp: '19',
    minTemp: '17'
  },
  {
    id: 3,
    icon: '',
    date: 'Thursday',
    maxTemp: '18',
    minTemp: '16'
  },
  {
    id: 4,
    icon: '',
    date: 'Friday',
    maxTemp: '18',
    minTemp: '16'
  },
  {
    id: 5,
    icon: '',
    date: 'Saturday',
    maxTemp: '18',
    minTemp: '16'
  },
  {
    id: 6,
    icon: '',
    date: 'Sunday',
    maxTemp: '18',
    minTemp: '16'
  }
]);

</script>