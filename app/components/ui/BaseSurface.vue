<script setup lang="ts">
import config from '~/configs/ui/base-surface.json'
import { resolveStyles } from '~/utils/ui'

interface Props {
  variant?: 'default' | 'glass' | 'sidebar' | 'bottom'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'none',
  as: 'div'
})

const classes = computed(() => resolveStyles(config, props))
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
