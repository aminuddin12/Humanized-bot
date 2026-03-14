<script setup lang="ts">
import typographyConfig from '~/configs/ui/typography.json'
import { cn } from '~/utils/ui'
import type { TypographyAlias } from '~/types/ui'

const props = defineProps<{
  variant?: TypographyAlias
  as?: string
}>()

const tag = computed(() => {
  if (props.as) return props.as
  if (['h1', 'h2', 'h3', 'p'].includes(props.variant as string)) return props.variant
  return 'span'
})

const classes = computed(() => {
  return props.variant ? (typographyConfig as Record<string, string>)[props.variant] : ''
})
</script>

<template>
  <component :is="tag" :class="cn(classes)">
    <slot />
  </component>
</template>
