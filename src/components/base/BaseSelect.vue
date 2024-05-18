<script setup lang="ts">
import BaseLabel from './BaseLabel.vue'

const props = defineProps<{
  modelValue?: string
  disabled?: boolean
  options?: [string, string][]
  label?: string
  errorMsg?: string
  showError?: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const onChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLSelectElement).value)
}
</script>

<template>
  <BaseLabel :label="props.label">
    <select
      :disabled="props.disabled"
      :value="props.modelValue"
      :class="{ error: showError }"
      @change="onChange"
    >
      <option v-for="item in options" :key="item[0]" :value="item[1]">{{ item[0] }}</option>
    </select>
    <div class="error-msg" v-if="showError">{{ errorMsg }}</div>
  </BaseLabel>
</template>

<style scoped>
select {
  min-height: 2.3em;
  font-weight: 400;
  padding: 0 var(--spacing-md);
}

select:disabled {
  color: var(--color-black);
  border: 2px solid transparent;
  background-color: transparent;
  font-weight: 500;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.error {
  border: 2px solid var(--color-error);
}

.error-msg {
  color: var(--color-error);
  font-size: var(--font-size-sm);
}
</style>
