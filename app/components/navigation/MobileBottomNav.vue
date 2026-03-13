<script setup lang="ts">
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
import { useNavigationData } from '~/composables/useNavigationData'

const { menuItems } = useNavigationData()
</script>

<template>
  <BaseSurface 
    variant="bottom" 
    as="nav" 
    class="fixed bottom-6 left-6 right-6 z-50 h-20 rounded-[2rem] shadow-floating flex items-center justify-around px-4 border border-gray-100 dark:border-gray-800"
  >
    <NuxtLink 
      v-for="link in menuItems" 
      :key="link.to" 
      :to="link.to" 
      class="group flex flex-col items-center justify-center gap-1 p-2"
    >
      <UIcon :name="link.icon" class="text-2xl text-gray-500 group-hover:text-emerald-500 transition-colors" />
      <BaseTypography variant="detail" color="muted" class="text-[8px] group-hover:text-gray-900 dark:group-hover:text-white">
        {{ link.label }}
      </BaseTypography>
    </NuxtLink>

    <BaseBox class="w-px h-8 bg-gray-100 dark:bg-gray-800 mx-2" />

    <ThemeToggle />
  </BaseSurface>
</template>
