<template>
  <button class="px-2 py-1 min-w-[5.7rem] bg-slate-200 rounded-2xl hover:bg-slate-400 hover:text-white transition-colors">
    {{ name }}
  </button>
</template>

<script setup>

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})

</script>