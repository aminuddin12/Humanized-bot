<script setup lang="ts">
import config from '~/configs/ui/base-card.json'
import { resolveStyles } from '~/utils/ui'

interface Props {
  variant?: string
  padding?: string
  radius?: string
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  radius: '2xl',
  as: 'div'
})

const classes = computed(() => resolveStyles(config, props))
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
