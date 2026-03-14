<script setup lang="ts">
const docLinks = [
  { group: 'Getting Started', links: [
    { label: 'Introduction', to: '/docs/intro' },
    { label: 'Quick Start', to: '/docs/quickstart' },
    { label: 'Installation', to: '/docs/installation' }
  ]},
  { group: 'Core Concepts', links: [
    { label: 'Bots & Agents', to: '/docs/bots' },
    { label: 'Training AI', to: '/docs/training' },
    { label: 'Integrations', to: '/docs/integrations' }
  ]},
  { group: 'API Reference', links: [
    { label: 'Authentication', to: '/docs/api/auth' },
    { label: 'Endpoints', to: '/docs/api/endpoints' },
    { label: 'Webhooks', to: '/docs/api/webhooks' }
  ]}
]
</script>

<template>
  <div class="sticky top-24 h-[calc(100vh-6rem)] overflow-auto pr-6 hidden lg:flex flex-col gap-10">
    <div v-for="group in docLinks" :key="group.group" class="flex flex-col gap-4">
      <h4 class="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest px-3">
        {{ group.group }}
      </h4>
      <ul class="flex flex-col gap-1">
        <li v-for="link in group.links" :key="link.label">
          <NuxtLink 
            :to="link.to" 
            class="block py-2 px-3 rounded-xl text-sm text-slate-500 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
            active-class="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-bold"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
