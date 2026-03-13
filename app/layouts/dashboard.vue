<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'
import { useAuth } from '~/composables/useAuth'

const { user, logout } = useAuth()

const sidebarLinks = [
  { label: 'Dashboard', to: '/u/dashboard', icon: 'i-fluent-grid-24-regular' },
  { label: 'Bot Config', to: '/u/settings/bot', icon: 'i-fluent-bot-24-regular' },
  { label: 'Contacts', to: '/u/settings/contacts', icon: 'i-fluent-people-community-24-regular' },
  { label: 'Billing', to: '/u/settings/billing', icon: 'i-fluent-receipt-money-24-regular' },
  { label: 'Settings', to: '/u/settings/account', icon: 'i-fluent-settings-24-regular' }
]
</script>

<template>
  <BaseBox as="div" class="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 min-h-screen flex">
    
    <!-- Sidebar -->
    <BaseSurface as="aside" variant="sidebar" class="w-64 fixed top-0 left-0 bottom-0 z-50 border-r flex flex-col hidden lg:flex">
      <BaseBox padding="md" class="h-20 border-b flex items-center gap-2">
        <BaseBox background="dark" rounded="lg" class="w-8 h-8 flex items-center justify-center">
          <UIcon name="i-fluent-bot-24-filled" class="text-emerald-500" />
        </BaseBox>
        <BaseTypography variant="h3" class="text-lg tracking-tighter">SaaS<BaseTypography variant="span" color="accent">Bot</BaseTypography></BaseTypography>
      </BaseBox>

      <BaseBox display="flex" flexDirection="col" gap="xs" padding="sm" class="flex-grow mt-4">
        <NuxtLink 
          v-for="link in sidebarLinks" 
          :key="link.to" 
          :to="link.to"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all group"
          active-class="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-bold"
        >
          <UIcon :name="link.icon" class="text-xl" />
          <BaseTypography variant="detail" class="text-sm font-medium">{{ link.label }}</BaseTypography>
        </NuxtLink>
      </BaseBox>

      <BaseBox padding="md" class="border-t">
        <BaseButton variant="ghost" class="w-full justify-start gap-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20" @click="logout">
          <UIcon name="i-fluent-arrow-exit-24-regular" />
          Logout
        </BaseButton>
      </BaseBox>
    </BaseSurface>

    <!-- Main Content Area -->
    <BaseBox class="flex-grow lg:pl-64 flex flex-col">
      <!-- Header -->
      <BaseSurface as="header" variant="glass" class="h-20 border-b sticky top-0 z-40 flex items-center justify-between px-8">
        <BaseTypography variant="h3" class="text-lg capitalize">{{ $route.path.split('/').pop()?.replace('-', ' ') }}</BaseTypography>
        
        <BaseBox display="flex" alignItems="center" gap="md">
          <ThemeToggle />
          <BaseBox display="flex" alignItems="center" gap="sm" class="pl-4 border-l">
            <BaseBox background="dark" rounded="full" class="w-8 h-8 bg-gray-200 dark:bg-gray-800" />
            <BaseBox display="flex" flexDirection="col">
              <BaseTypography variant="detail" class="text-[10px] font-black uppercase">{{ user?.name || 'Guest' }}</BaseTypography>
              <BaseTypography variant="detail" color="muted" class="text-[9px] lowercase opacity-60">{{ user?.email }}</BaseTypography>
            </BaseBox>
          </BaseBox>
        </BaseBox>
      </BaseSurface>

      <!-- Page Content -->
      <BaseBox as="main" padding="lg" class="flex-grow">
        <slot />
      </BaseBox>
    </BaseBox>

  </BaseBox>
</template>
