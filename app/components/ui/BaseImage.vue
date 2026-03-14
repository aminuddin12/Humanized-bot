<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  rounded?: 'none' | 'full' | 'xl' | '2xl'
}>()

const roundedClasses: Record<string, string> = {
  'none': 'rounded-none',
  'full': 'rounded-full',
  'xl': 'rounded-xl',
  '2xl': 'rounded-2xl'
}
</script>

<template>
  <img :src="src" :alt="alt || ''" :class="roundedClasses[rounded || 'none']">
</template>
