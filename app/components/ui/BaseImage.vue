<script setup lang="ts">
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  rounded: { type: String, default: 'none' }
})

const roundedClasses: Record<string, string> = {
  'none': 'rounded-none',
  'full': 'rounded-full',
  'xl': 'rounded-xl',
  '2xl': 'rounded-2xl'
}
</script>

<template>
  <img :src="src" :alt="alt" :class="roundedClasses[rounded]" />
</template>
