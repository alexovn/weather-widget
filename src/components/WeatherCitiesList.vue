<template>
  <div class="mt-3 p-4 bg-slate-300 rounded-2xl">
    <div
      class="p-2 flex items-center justify-between bg-slate-50 rounded-xl group hover:bg-slate-400 transition-colors [&:not(:last-child)]:mb-2"
      v-for="(city, idx) in citiesList" :key="city.id">
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
</template>

<script setup>
import { Bars3Icon, TrashIcon } from '@heroicons/vue/24/outline';

defineProps({
  citiesList: {
    type: Array,
    default: () => []
  }
});

</script>