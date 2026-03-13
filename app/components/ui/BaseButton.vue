<script setup lang="ts">
import config from '~/configs/ui/base-button.json'
import { resolveStyles } from '~/utils/ui'

interface Props {
  variant?: string
  size?: string
  to?: string | null
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  to: null,
  disabled: false
})

const classes = computed(() => resolveStyles(config, props))
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    :class="classes"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>
