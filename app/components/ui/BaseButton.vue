<script setup>
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import config from '@/configs/ui/base-button.json'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  },
  to: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  return twMerge(
    clsx(
      config.base,
      config.variants.variant[props.variant] || config.variants.variant[config.defaultVariants.variant],
      config.variants.size[props.size] || config.variants.size[config.defaultVariants.size]
    )
  )
})
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
