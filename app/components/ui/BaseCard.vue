<script setup lang="ts">
import boxConfig from '~/configs/layouts/box.json'
import surfaceConfig from '~/configs/ui/surface.json'
import { cn } from '~/utils/ui'
import type { BoxLayoutAlias, SurfaceAlias } from '~/types/ui'

const props = defineProps<{
  layout?: BoxLayoutAlias
  theme?: SurfaceAlias
  as?: string
}>()

const classes = computed(() => {
  const layoutClass = props.layout ? (boxConfig as Record<string, string>)[props.layout] : ''
  const themeClass = props.theme ? (surfaceConfig as Record<string, string>)[props.theme] : ''
  return cn(layoutClass, themeClass)
})
</script>

<template>
  <component :is="as || 'div'" :class="classes">
    <slot />
  </component>
</template>
