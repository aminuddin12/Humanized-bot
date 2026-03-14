<script setup lang="ts">
import boxConfig from '~/configs/layouts/box.json'
import surfaceConfig from '~/configs/ui/surface.json'
import { cn } from '~/utils/ui'
import type { BoxLayoutAlias, SurfaceAlias } from '~/types/ui'

const props = defineProps<{
  layout?: BoxLayoutAlias
  theme?: SurfaceAlias
  to?: string | null
  disabled?: boolean
  as?: string
}>()

const classes = computed(() => {
  const baseClass = (boxConfig as Record<string, string>)['btn-base'] || ''
  const layoutClass = props.layout ? (boxConfig as Record<string, string>)[props.layout] : (boxConfig as Record<string, string>)['btn-md']
  const themeClass = props.theme ? (surfaceConfig as Record<string, string>)[props.theme] : (surfaceConfig as Record<string, string>)['btn-primary']
  return cn(baseClass, layoutClass, themeClass)
})
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : (as || 'button')"
    :to="to"
    :class="classes"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>
