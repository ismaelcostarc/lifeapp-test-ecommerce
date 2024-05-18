<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'default' | 'cancel' | 'link' | 'delete' | 'highlight1' | 'highlight2' | 'highlight3'
    size?: 'small' | 'large' | 'full'
    disabled?: boolean
  }>(),
  {
    type: 'default'
  }
)
const emit = defineEmits(['click'])
</script>

<template>
  <button
    @click.stop="emit('click')"
    :class="['type-' + props.type, 'size-' + props.size, props.customColor, disabled && 'disabled']"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  color: var(--color-white);
  border: 0;
  padding: 0.75em 1.3em;
  cursor: pointer;
}

button:hover {
  filter: brightness(0.8);
}

.type-default {
  background-color: var(--color-primary);
}

.type-cancel {
  background-color: var(--color-gray);
}

.type-link {
  background-color: var(--color-white);
  color: var(--color-link);
}

.type-delete {
  background-color: var(--color-cancel);
}

.size-full {
  width: 100%;
}

.type-hightlight1 {
  background-color: var(--color-highlight1);
}

.type-hightlight2 {
  background-color: var(--color-highlight2);
}

.type-hightlight3 {
  background-color: var(--color-highlight3);
}

.disabled {
  background-color: var(--color-gray);
  cursor: initial;
}

.disabled:hover {
  filter: none;
}
</style>
