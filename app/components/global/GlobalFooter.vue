<script setup lang="ts">
import { useSystemHealth } from '~/composables/useSystemHealth'
const { checkHealth } = useSystemHealth()
const { data, status } = await checkHealth()
</script>

<template>
  <footer class="bg-slate-50 dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div class="md:col-span-2">
          <h3 class="font-bold text-xl mb-4 text-emerald-600 dark:text-emerald-400">SaaSBot</h3>
          <p class="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed">
            Scale your business with the most human-like AI bot engine. Automated, intelligent, and always available.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <h4 class="font-semibold text-slate-900 dark:text-white">Product</h4>
          <NuxtLink to="/features" class="text-sm text-slate-500 hover:text-emerald-500">Features</NuxtLink>
          <NuxtLink to="/pricing" class="text-sm text-slate-500 hover:text-emerald-500">Pricing</NuxtLink>
        </div>
        <div class="flex flex-col gap-3">
          <h4 class="font-semibold text-slate-900 dark:text-white">Company</h4>
          <NuxtLink to="/about" class="text-sm text-slate-500 hover:text-emerald-500">About Us</NuxtLink>
          <NuxtLink to="/docs" class="text-sm text-slate-500 hover:text-emerald-500">Documentation</NuxtLink>
        </div>
      </div>
      <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>&copy; 2026 SaaS Bot Engine. All rights reserved.</p>

        <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
          <div class="w-2 h-2 rounded-full animate-pulse" :class="status === 'success' ? 'bg-emerald-500' : 'bg-red-500'"></div>
          <span class="font-medium">System: {{ status === 'success' ? 'Online' : 'Offline' }}</span>
          <span v-if="data?.data?.total_seeded_users" class="hidden sm:inline border-l border-slate-300 dark:border-slate-600 pl-2 ml-1">
            Users: {{ data.data.total_seeded_users }}
          </span>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
