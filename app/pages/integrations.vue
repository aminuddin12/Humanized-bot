<script setup lang="ts">
import type { IntegrationApp, ApiResponse } from '~/types'

const { data: response } = await useFetch<ApiResponse<{ title: string, description: string, list: IntegrationApp[] }>>('/api/v1/public/integrations')

const integrations = computed(() => response.value?.data.list || [])
const title = computed(() => response.value?.data.title || 'Connect with Your Ecosystem.')
const description = computed(() => response.value?.data.description || 'SaaS Bot integrates seamlessly with various popular productivity services.')

useHead({
  title: 'Integrations | SaaS Humanized-Bot'
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="py-20 bg-white dark:bg-slate-950 min-h-screen">
      <UContainer>
        <div class="flex flex-col gap-4 mb-20 max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {{ title }}
          </h1>
          <p class="text-lg text-slate-500 dark:text-slate-400">
            {{ description }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard 
            v-for="app in integrations" 
            :key="app.id" 
            class="group hover:ring-2 hover:ring-emerald-500 transition-all duration-300"
          >
            <div class="flex flex-col items-center text-center py-4">
              <div class="w-20 h-20 mb-8 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                <UIcon :name="app.logo" class="text-4xl text-emerald-500" />
              </div>
              
              <UBadge size="xs" variant="subtle" color="blue" class="mb-4">
                {{ app.category }}
              </UBadge>
              
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {{ app.name }}
              </h3>
              
              <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {{ app.description }}
              </p>
              
              <UButton variant="ghost" color="emerald" class="mt-6 font-bold group-hover:translate-x-1 transition-transform">
                Learn Integration <UIcon name="i-fluent-arrow-right-20-regular" class="ml-2" />
              </UButton>
            </div>
          </UCard>
        </div>

        <div class="mt-32 pt-20 border-t border-slate-100 dark:border-slate-800 text-center">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
            Want a Custom Integration?
          </h2>
          <p class="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            We provide comprehensive open APIs and SDKs to connect SaaS Bot with your internal systems or custom CRM.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <UButton size="xl" color="primary" class="px-10">Contact Developer Team</UButton>
            <UButton size="xl" variant="outline" color="gray" class="px-10">Read API Docs</UButton>
          </div>
        </div>
      </UContainer>
    </div>
  </NuxtLayout>
</template>
