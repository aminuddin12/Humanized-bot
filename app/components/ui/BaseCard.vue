<script setup lang="ts">
import cardConfig from '~/configs/ui/base-card.json'
import { resolveStyles } from '~/utils/ui'
import type { CardVariant, CardPadding, CardRadius } from '~/types/ui'

const props = defineProps<{
  variant?: CardVariant
  padding?: CardPadding
  radius?: CardRadius
  as?: string
}>()

const classes = computed(() => resolveStyles(cardConfig, props))
</script>

<template>
  <component :is="as || 'div'" :class="classes">
    <slot />
  </component>
</template>
