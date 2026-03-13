<script setup>
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

const props = defineProps({
  as: {
    type: String,
    default: 'section'
  },
  containerClass: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <component :is="as" :class="twMerge('relative px-6 md:px-10', $attrs.class)">
    <div :class="twMerge('max-w-7xl mx-auto', containerClass)">
      <slot />
    </div>
  </component>
</template>
