<script setup lang="ts">
import config from '~/configs/ui/typography.json'
import { resolveStyles } from '~/utils/ui'

const props = defineProps({
  variant: {
    type: String,
    default: 'p'
  },
  color: {
    type: String,
    default: 'primary'
  },
  align: {
    type: String,
    default: 'left'
  },
  as: {
    type: String,
    default: null
  }
})

const tag = computed(() => {
  if (props.as) return props.as
  if (['h1', 'h2', 'h3', 'p'].includes(props.variant)) return props.variant
  return 'span'
})

const classes = computed(() => resolveStyles(config, props))
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>
