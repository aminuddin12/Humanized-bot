<script setup lang="ts">
import config from '~/configs/ui/grid.json'
import { resolveStyles } from '~/utils/ui'

const props = defineProps({
  cols: {
    type: String,
    default: '1'
  },
  gap: {
    type: String,
    default: 'md'
  },
  items: {
    type: String,
    default: 'start'
  },
  as: {
    type: String,
    default: 'div'
  }
})

const classes = computed(() => resolveStyles(config, props))
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
