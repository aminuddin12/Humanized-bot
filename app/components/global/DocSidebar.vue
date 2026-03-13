<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'

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
  <BaseBox as="aside" class="w-64 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-auto pr-6 hidden lg:block">
    <BaseBox display="flex" flexDirection="col" gap="lg">
      <BaseBox v-for="group in docLinks" :key="group.group" display="flex" flexDirection="col" gap="sm">
        <BaseTypography variant="detail" class="font-black text-gray-900 dark:text-white uppercase tracking-widest text-[10px]">
          {{ group.group }}
        </BaseTypography>
        <BaseBox as="ul" display="flex" flexDirection="col" gap="xs">
          <BaseBox as="li" v-for="link in group.links" :key="link.label">
            <NuxtLink 
              :to="link.to" 
              class="block py-1.5 px-3 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
              active-class="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-bold"
            >
              {{ link.label }}
            </NuxtLink>
          </BaseBox>
        </BaseBox>
      </BaseBox>
    </BaseBox>
  </BaseBox>
</template>
