<script setup lang="ts">
import type { PricingPlan, ApiResponse } from '~/types'

const isAnnual = ref(true)

const { data: response } = await useFetch<ApiResponse<{ title: string, description: string, list: PricingPlan[] }>>('/api/v1/public/pricing')

const pricing = computed(() => response.value?.data.list || [])
const title = computed(() => response.value?.data.title || 'Investment for Growth.')
const description = computed(() => response.value?.data.description || 'Choose the plan that fits your business scale. Transparent pricing with no hidden fees.')

useHead({
  title: 'Pricing | SaaS Humanized-Bot'
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <UContainer>
        <div class="flex flex-col items-center gap-4 mb-16 text-center max-w-2xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {{ title }}
          </h1>
          <p class="text-lg text-slate-500 dark:text-slate-400">
            {{ description }}
          </p>

          <div class="mt-10 p-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1">
            <UButton 
              :variant="!isAnnual ? 'solid' : 'ghost'" 
              color="primary"
              class="rounded-full px-8" 
              @click="isAnnual = false"
            >
              Monthly
            </UButton>
            <UButton 
              :variant="isAnnual ? 'solid' : 'ghost'" 
              color="primary"
              class="rounded-full px-8" 
              @click="isAnnual = true"
            >
              Annually
              <UBadge color="emerald" variant="subtle" size="xs" class="ml-2 bg-emerald-500/10 text-emerald-500 border-transparent">
                -20%
              </UBadge>
            </UButton>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <UCard 
            v-for="plan in pricing" 
            :key="plan.id" 
            :class="[
              'flex flex-col relative overflow-visible transition-all duration-300',
              plan.isPopular ? 'ring-2 ring-emerald-500 shadow-xl' : ''
            ]"
          >
            <div v-if="plan.isPopular" class="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <UBadge color="primary" class="shadow-lg px-6 py-1 text-xs uppercase font-black tracking-widest">
                Most Popular
              </UBadge>
            </div>

            <div class="mb-8">
              <div :class="['text-xs font-black uppercase tracking-widest mb-2', plan.isPopular ? 'text-emerald-500' : 'text-slate-500']">
                {{ plan.name }}
              </div>
              
              <div class="flex items-end gap-1">
                <span class="text-5xl font-black text-slate-900 dark:text-white">
                  {{ plan.price }}
                </span>
                <span class="text-slate-500 dark:text-slate-400 font-medium mb-2">
                  /{{ plan.period === 'annually' ? 'yr' : 'mo' }}
                </span>
              </div>
              
              <p class="text-sm mt-4 text-slate-500 dark:text-slate-400">
                {{ plan.description }}
              </p>
            </div>

            <div class="flex flex-col gap-4 flex-grow mb-10">
              <div v-for="feat in plan.features" :key="feat" class="flex items-center gap-3">
                <UIcon 
                  name="i-fluent-checkmark-circle-24-filled" 
                  class="text-xl text-emerald-500" 
                />
                <span class="text-sm text-slate-600 dark:text-slate-300">
                  {{ feat }}
                </span>
              </div>
            </div>

            <UButton 
              :color="plan.isPopular ? 'primary' : 'gray'" 
              :variant="plan.isPopular ? 'solid' : 'outline'"
              size="lg" 
              block
              class="font-bold py-4 rounded-xl"
            >
              Choose {{ plan.name }}
            </UButton>
          </UCard>
        </div>

        <div class="flex justify-center mt-24">
          <UCard class="max-w-3xl w-full border-dashed border-2 border-slate-200 dark:border-slate-800 bg-transparent">
            <div class="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div class="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center shrink-0">
                <UIcon name="i-fluent-shield-checkmark-24-filled" class="text-3xl text-emerald-500" />
              </div>
              <div>
                <h3 class="font-bold text-xl text-slate-900 dark:text-white">7-Day Satisfaction Guarantee</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  If you feel our service does not meet expectations, we will refund your funds 100% with no questions asked.
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </div>
  </NuxtLayout>
</template>
