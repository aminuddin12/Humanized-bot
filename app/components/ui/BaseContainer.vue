<script setup lang="ts">
import config from '~/configs/ui/container.json'
import { resolveStyles } from '~/utils/ui'

const props = defineProps({
  padding: {
    type: String,
    default: 'md'
  },
  width: {
    type: String,
    default: 'default'
  },
  as: {
    type: String,
    default: 'section'
  }
})

const classes = computed(() => resolveStyles(config, props))
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
