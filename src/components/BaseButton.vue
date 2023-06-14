<script lang="ts" setup>
defineProps({
  message: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["click"]);
</script>

<template>
  <button @click="emits('click')">
    {{ message }}
  </button>
</template>
