<template>
  <transition name="opacity" mode="out-in">
    <div
      v-if="show"
      class="z-10 absolute inset-0 bg-slate-800/50 shadow-md rounded-3xl w-full h-full"
      @click="$emit('show')"
    >
    </div>
  </transition>
</template>

<script setup>

defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

</script>