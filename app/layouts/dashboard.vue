<script setup lang="ts">
import type { User } from '~/composables/useAuth'

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
  <div class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 min-h-screen flex">
    
    <!-- Sidebar -->
    <aside class="w-64 fixed top-0 left-0 bottom-0 z-50 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col hidden lg:flex">
      <div class="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 px-6">
        <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <UIcon name="i-fluent-bot-24-filled" class="text-white text-xl" />
        </div>
        <span class="font-bold text-lg tracking-tight">SaaSBot</span>
      </div>

      <nav class="flex flex-col gap-1 p-4 flex-grow">
        <NuxtLink 
          v-for="link in sidebarLinks" 
          :key="link.to" 
          :to="link.to"
          class="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
          active-class="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-bold"
        >
          <UIcon :name="link.icon" class="text-xl" />
          <span class="text-sm font-medium">{{ link.label }}</span>
        </NuxtLink>
      </nav>

      <div class="p-4 border-t border-slate-200 dark:border-slate-800">
        <UButton 
          variant="ghost" 
          color="red" 
          block 
          icon="i-fluent-arrow-exit-24-regular"
          class="justify-start"
          @click="logout"
        >
          Logout
        </UButton>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-grow lg:pl-64 flex flex-col">
      <!-- Header -->
      <header class="h-16 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 flex items-center justify-between px-8 bg-white/75 dark:bg-slate-900/75 backdrop-blur">
        <h3 class="font-bold text-lg capitalize">{{ $route.path.split('/').pop()?.replace('-', ' ') }}</h3>
        
        <div class="flex items-center gap-4">
          <ThemeToggle />
          <div class="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
            <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              <UIcon name="i-fluent-person-24-regular" />
            </div>
            <div class="flex flex-col">
              <span class="text-xs font-bold uppercase tracking-tight">{{ (user as User)?.name || 'Guest' }}</span>
              <span class="text-[10px] text-slate-500 lowercase">{{ (user as User)?.email }}</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-8 flex-grow">
        <slot />
      </main>
    </div>

  </div>
</template>
