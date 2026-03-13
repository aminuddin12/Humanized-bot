<script setup lang="ts">
import config from '~/configs/ui/icon-wrapper.json'
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
    required: true
  }
})

const classes = computed(() => resolveStyles(config, props))
</script>

<template>
  <div :class="classes">
    <UIcon :name="icon" />
  </div>
</template>
