<script setup>
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import config from '@/configs/ui/base-card.json'

const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  padding: {
    type: String,
    default: 'md'
  },
  radius: {
    type: String,
    default: '2xl'
  }
})

const classes = computed(() => {
  return twMerge(
    clsx(
      config.base,
      config.variants.variant[props.variant] || config.variants.variant[config.defaultVariants.variant],
      config.variants.padding[props.padding] || config.variants.padding[config.defaultVariants.padding],
      config.variants.radius[props.radius] || config.variants.radius[config.defaultVariants.radius]
    )
  )
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
