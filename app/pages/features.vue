<script setup lang="ts">
import type { BotFeature, ApiResponse } from '~/types'

const { data: response } = await useFetch<ApiResponse<{ title: string, description: string, list: BotFeature[] }>>('/api/v1/public/features')

const features = computed(() => response.value?.data.list || [])
const title = computed(() => response.value?.data.title || 'Fitur Unggulan Kami.')
const description = computed(() => response.value?.data.description || 'Teknologi bot tercanggih yang dirancang untuk memberikan pengalaman chat paling manusiawi.')

useHead({
  title: 'Fitur | SaaS Humanized-Bot'
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="py-20 bg-white dark:bg-slate-950 min-h-screen">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto mb-20">
          <UBadge color="emerald" variant="subtle" size="lg" class="mb-4">Capabilities</UBadge>
          <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">{{ title }}</h1>
          <p class="text-lg text-slate-500 dark:text-slate-400">{{ description }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard 
            v-for="feature in features" 
            :key="feature.id"
            class="hover:shadow-lg transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/30 mb-6">
              <UIcon :name="feature.icon" class="text-2xl text-emerald-500" />
            </div>
            
            <div class="flex items-center gap-2 mb-4">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ feature.name }}</h3>
              <UBadge v-if="feature.isPremium" size="xs" variant="solid" color="blue">Pro</UBadge>
            </div>
            
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </div>
  </NuxtLayout>
</template>
