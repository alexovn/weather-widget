<template>
  <div class="w-full">
    <label class="inline-block mb-2" :for="id">{{ label }}</label>
    <div class="flex items-center justify-between gap-3 w-full">
      <input
        :id="id"
        class="px-2 py-1 w-full bg-white rounded-2xl"
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
});

</script>