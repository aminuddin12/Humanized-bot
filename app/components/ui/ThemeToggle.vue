<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'

const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <BaseButton
      variant="ghost"
      size="sm"
      aria-label="Toggle Theme"
      @click="isDark = !isDark"
    >
      <UIcon
        :name="isDark ? 'i-fluent-weather-sunny-24-filled' : 'i-fluent-weather-moon-24-filled'"
        class="text-xl transition-all duration-300 transform"
        :class="isDark ? 'rotate-0' : 'rotate-90'"
      />
    </BaseButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
