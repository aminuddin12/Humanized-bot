<script setup lang="ts">
import boxConfigs from '~/configs/layouts/box.json'
import surfaceConfigs from '~/configs/ui/surface.json'
import type { BoxLayoutAlias, SurfaceAlias } from '~/types/ui'

const props = defineProps<{
  layout?: BoxLayoutAlias
  theme?: SurfaceAlias
  as?: string
  class?: string
}>()

const computedClasses = computed(() => {
  return [
    props.layout ? (boxConfigs as Record<string, string>)[props.layout] : '',
    props.theme ? (surfaceConfigs as Record<string, string>)[props.theme] : '',
    props.class
  ].filter(Boolean).join(' ')
})
</script>

<template>
  <component :is="as || 'div'" :class="computedClasses">
    <slot />
  </component>
</template>
