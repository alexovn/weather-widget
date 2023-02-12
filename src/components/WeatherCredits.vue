<template>
  <div class="m-auto max-w-[17rem] text-center text-xs text-slate-500">
    <ul>
      <li v-for="item in credits" :key="item.id">
        <span class="mr-1 inline-block">{{ item.title }}</span>
        <a
          class="underline transition-colors hover:text-slate-800"
          :href="item.link"
          target="_blank"
        >
          {{ item.author }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const credits = ref([
  {
    id: 1,
    title: 'weather presented by:',
    author: 'OpenWeather',
    link: 'https://openweathermap.org/',
  },
]);

</script>