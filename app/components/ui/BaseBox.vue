<script setup lang="ts">
import config from '~/configs/ui/box.json'
import { resolveStyles } from '~/utils/ui'

const props = defineProps({
  display: { type: String, default: null },
  flexDirection: { type: String, default: null },
  flexWrap: { type: String, default: null },
  alignItems: { type: String, default: null },
  justifyContent: { type: String, default: null },
  gap: { type: String, default: null },
  position: { type: String, default: null },
  overflow: { type: String, default: null },
  zIndex: { type: String, default: null },
  inset: { type: String, default: null },
  animation: { type: String, default: null },
  background: { type: String, default: null },
  as: { type: String, default: 'div' }
})

const classes = computed(() => resolveStyles(config, props))
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
