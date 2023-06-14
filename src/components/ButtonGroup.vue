<template>
  <div class="button-group">
    <BaseButton
      v-for="index in length"
      :key="`button-${index}`"
      :message="`Button ${index}`"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
defineProps({
  length: {
    type: Number,
    default: 1,
  },
});
</script>
