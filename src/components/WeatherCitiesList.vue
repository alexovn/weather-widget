<template>
  <div class="mt-5 bg-slate-300 rounded-2xl">
    <div
      class="mb-[-3rem] max-h-[18rem] overflow-y-auto scrollbar"
    >
      <div
        class="p-2 flex items-center justify-between bg-slate-50 rounded-xl group hover:bg-slate-400 transition-colors [&:not(:last-child)]:mb-2 last:mb-[3rem]"
        v-for="(city, idx) in cities" :key="city.id" draggable="true" @dragstart="onDragStart($event, idx, city)"
        @drop="onDrop($event, idx)" @dragover.prevent @dragenter.prevent>
        <div>
          <span class="block w-5 h-5 cursor-grab active:cursor-grabbing">
            <Bars3Icon class="w-full h-full group-hover:text-white transition-colors" />
          </span>
        </div>
        <span class="max-w-[14rem] truncate group-hover:text-white transition-colors">
          {{ city.name }}
        </span>
        <button class="w-5 h-5 group-hover:text-red-700 transition-colors" @click="$emit('deleteItem', idx)">
          <TrashIcon class="w-full h-full" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Bars3Icon, TrashIcon } from '@heroicons/vue/24/outline';

import { storeToRefs } from 'pinia';
import { useCitiesStore } from '@/stores/cities';

const store = useCitiesStore();

const { cities } = storeToRefs(store);

const dragging = ref(0);

const onDragStart = (e, idx, city) => {
  e.dataTransfer.dropEffect = 'move';
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('itemId', city.id);
  dragging.value = idx;
};

const onDrop = (e, idx) => {
  const data = e.dataTransfer.getData('itemId');
  store.$patch((state) => {
    state.cities.splice(idx, 0, state.cities.splice(dragging.value, 1)[0]);
  });
};

</script>