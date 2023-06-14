<template>
  <div class="form-group">
    <label v-if="label">{{ label }}</label>
    <input v-model="vModel" :name="name" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: "input-name",
  },
  label: {
    type: String,
    default: null,
  },
});

const emits = defineEmits(["update:modelValue"]);

const { modelValue } = toRefs(props);

const vModel = computed({
  get() {
    return modelValue.value;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>
