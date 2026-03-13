<script setup lang="ts">
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
import { useNavigationData } from '~/composables/useNavigationData'

const { menuItems } = useNavigationData()
const isCollapsed = ref(false)
</script>

<template>
  <BaseSurface 
    variant="sidebar" 
    as="aside" 
    class="fixed top-0 left-0 bottom-0 z-50 transition-all duration-300 flex flex-col h-full"
    :class="isCollapsed ? 'w-20' : 'w-64'"
  >
    <BaseBox padding="md" display="flex" alignItems="center" justifyContent="between" class="h-20 border-b border-gray-100 dark:border-gray-800">
      <NuxtLink to="/" v-if="!isCollapsed" class="flex items-center gap-2">
        <BaseTypography variant="h3" as="span" class="text-xl tracking-tighter text-gray-900 dark:text-white">SaaS<BaseTypography variant="span" color="accent">Bot</BaseTypography></BaseTypography>
      </NuxtLink>
      <BaseBox v-else background="dark" rounded="xl" display="flex" alignItems="center" justifyContent="center" class="w-10 h-10">
        <UIcon name="i-fluent-bot-24-filled" class="text-xl text-emerald-500" />
      </BaseBox>
      <BaseButton variant="ghost" size="sm" @click="isCollapsed = !isCollapsed">
        <UIcon :name="isCollapsed ? 'i-fluent-panel-right-24-filled' : 'i-fluent-panel-left-24-filled'" />
      </BaseButton>
    </BaseBox>

    <BaseBox display="flex" flexDirection="col" gap="sm" padding="sm" class="flex-grow">
      <NuxtLink 
        v-for="link in menuItems" 
        :key="link.to" 
        :to="link.to" 
        class="group flex items-center gap-4 p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors"
      >
        <UIcon :name="link.icon" class="text-2xl text-gray-500 group-hover:text-emerald-500 transition-colors" />
        <BaseTypography 
          v-if="!isCollapsed" 
          variant="detail" 
          color="muted" 
          class="group-hover:text-gray-900 dark:group-hover:text-white"
        >
          {{ link.label }}
        </BaseTypography>
      </NuxtLink>
    </BaseBox>

    <BaseBox padding="sm" class="border-t border-gray-100 dark:border-gray-800 flex items-center gap-4">
      <ThemeToggle />
      <BaseTypography v-if="!isCollapsed" variant="detail" color="muted">Theme</BaseTypography>
    </BaseBox>
  </BaseSurface>
</template>
