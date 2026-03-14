<script setup lang="ts">
import surfaceConfigs from '~/configs/ui/surface.json'
import type { SurfaceAlias } from '~/types/ui'

const props = defineProps<{
  variant?: SurfaceAlias
  as?: string
  class?: string
}>()

const computedClasses = computed(() => {
  return [
    props.variant ? (surfaceConfigs as Record<string, string>)[props.variant] : '',
    props.class
  ].filter(Boolean).join(' ')
})
</script>

<template>
  <component :is="as || 'div'" :class="computedClasses">
    <slot />
  </component>
</template>
