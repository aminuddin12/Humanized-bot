<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { usePublicData } from '@/composables/usePublicData'

defineProps({
  menuItems: {
    type: Array,
    required: true
  },
  logoLabel: {
    type: String,
    default: 'Klinik'
  }
})

const { isDark, toggleDark } = usePublicData()
</script>

<template>
  <BaseCard as="header" variant="glass" radius="none" class="fixed top-0 left-0 right-0 h-20 z-50 p-0">
    <div class="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2 font-black text-2xl tracking-tighter text-alan-dark dark:text-white group z-10">
        <div class="w-10 h-10 bg-alan-surface dark:bg-dark-surface rounded-xl flex items-center justify-center group-hover:bg-alan-accent transition-colors duration-300 shadow-sm border border-transparent dark:border-dark-border">
          <UIcon name="i-fluent-leaf-two-24-filled" class="text-alan-accent group-hover:text-white text-xl transition-colors" />
        </div>
        {{ logoLabel }}<span class="text-alan-accent">.</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.label"
          :to="item.to"
          class="text-sm font-bold transition-colors"
          active-class="text-alan-accent"
          inactive-class="text-alan-text-muted hover:text-alan-dark dark:text-gray-400 dark:hover:text-white"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-4 z-10">
        <button @click="toggleDark" class="w-10 h-10 rounded-full bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border text-alan-text-muted dark:text-gray-400 flex items-center justify-center hover:text-alan-dark dark:hover:text-white transition-colors shadow-sm group">
          <UIcon :name="isDark ? 'i-fluent-weather-moon-24-filled' : 'i-fluent-weather-sunny-24-filled'" class="text-xl group-hover:rotate-45 transition-transform" />
        </button>
        <div class="hidden sm:flex items-center gap-3">
          <BaseButton variant="ghost" size="sm" to="/auth/login">Masuk</BaseButton>
          <BaseButton variant="secondary" size="md" to="/auth/register">Daftar</BaseButton>
        </div>
        <button class="md:hidden text-2xl text-alan-dark dark:text-white">
          <UIcon name="i-fluent-line-horizontal-3-20-regular" />
        </button>
      </div>
    </div>
  </BaseCard>
</template>
