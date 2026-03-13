<script setup lang="ts">
import config from '~/configs/ui/badge.json'
import { resolveStyles } from '~/utils/ui'

const props = defineProps({
  color: {
    type: String,
    default: 'emerald'
  },
  size: {
    type: String,
    default: 'md'
  },
  icon: {
    type: String,
    default: null
  }
})

const classes = computed(() => resolveStyles(config, props))
</script>

<template>
  <div :class="classes">
    <div v-if="color === 'emerald'" class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
    <UIcon v-if="icon" :name="icon" />
    <span><slot /></span>
  </div>
</template>
