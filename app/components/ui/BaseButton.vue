<script setup lang="ts">
import buttonConfig from '~/configs/ui/base-button.json'
import { resolveStyles } from '~/utils/ui'
import type { ButtonVariant, ButtonSize } from '~/types/ui'

const props = defineProps<{
  variant?: ButtonVariant
  size?: ButtonSize
  to?: string | null
  disabled?: boolean
  as?: string
}>()

const classes = computed(() => resolveStyles(buttonConfig, props))
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
