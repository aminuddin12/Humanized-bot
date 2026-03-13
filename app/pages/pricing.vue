<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'
import type { PricingPlan, ApiResponse } from '~/types'

const isAnnual = ref(true)

const { data: response } = await useFetch<ApiResponse<{ title: string, description: string, list: PricingPlan[] }>>('/api/v1/public/pricing')

const pricing = computed(() => response.value?.data.list || [])
const title = computed(() => response.value?.data.title || 'Investasi Pertumbuhan.')
const description = computed(() => response.value?.data.description || 'Pilih paket yang sesuai dengan skala bisnis Anda. Transparan tanpa biaya tersembunyi.')

useHead({
  title: 'Pricing | SaaS Humanized-Bot'
})
</script>

<template>
  <NuxtLayout name="default">
    <BaseContainer padding="lg">
      <BaseBox display="flex" flexDirection="col" alignItems="center" gap="sm" class="mb-16 text-center max-w-2xl mx-auto">
        <BaseTypography variant="h1" align="center">
          {{ title }}
        </BaseTypography>
        <BaseTypography variant="p" align="center">
          {{ description }}
        </BaseTypography>

        <!-- Visual Sample: Pricing Toggle from Template -->
        <BaseBox background="white" class="mt-10 p-1.5 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm flex items-center gap-1">
          <BaseButton 
            :variant="!isAnnual ? 'primary' : 'ghost'" 
            size="sm" 
            class="rounded-full px-8" 
            @click="isAnnual = false"
          >
            Bulanan
          </BaseButton>
          <BaseButton 
            :variant="isAnnual ? 'primary' : 'ghost'" 
            size="sm" 
            class="rounded-full px-8" 
            @click="isAnnual = true"
          >
            Tahunan
            <BaseBadge color="emerald" size="sm" class="ml-2 bg-white/20 text-white border-transparent">
              -20%
            </BaseBadge>
          </BaseButton>
        </BaseBox>
      </BaseBox>

      <!-- Adaptive Grid: 1 on Mobile, 2 on Tablet/Desktop -->
      <BaseGrid cols="2" gap="lg" class="max-w-5xl mx-auto">
        <BaseCard 
          v-for="plan in pricing" 
          :key="plan.id" 
          :variant="plan.isPopular ? 'featured' : 'default'" 
          padding="xl" 
          radius="special" 
          class="flex flex-col relative overflow-visible"
        >
          <!-- Visual Sample: Popular Badge from Template -->
          <BaseBox v-if="plan.isPopular" position="absolute" class="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <BaseBadge color="emerald" class="shadow-glow px-6 py-2">
              Paling Populer
            </BaseBadge>
          </BaseBox>

          <BaseBox class="mb-8">
            <BaseTypography 
              variant="detail" 
              color="muted" 
              class="mb-2"
              :class="plan.isPopular ? 'text-emerald-400' : ''"
            >
              {{ plan.name }}
            </BaseTypography>
            
            <BaseBox display="flex" alignItems="end" gap="none">
              <BaseTypography variant="h1" class="text-4xl" :class="plan.isPopular ? 'text-white' : ''">
                {{ plan.price }}
              </BaseTypography>
              <BaseTypography 
                variant="p" 
                color="muted" 
                class="mb-2 ml-1"
                :class="plan.isPopular ? 'text-gray-400' : ''"
              >
                /{{ plan.period === 'annually' ? 'thn' : 'bln' }}
              </BaseTypography>
            </BaseBox>
            
            <BaseTypography 
              variant="p" 
              class="text-xs mt-4"
              :class="plan.isPopular ? 'text-gray-300' : ''"
            >
              {{ plan.description }}
            </BaseTypography>
          </BaseBox>

          <BaseBox display="flex" flexDirection="col" gap="sm" class="flex-grow mb-10">
            <BaseBox v-for="feat in plan.features" :key="feat" display="flex" alignItems="center" gap="md">
              <UIcon 
                name="i-fluent-checkmark-circle-24-filled" 
                class="text-xl"
                :class="plan.isPopular ? 'text-emerald-400' : 'text-emerald-500'" 
              />
              <BaseTypography 
                variant="p" 
                class="text-sm"
                :class="plan.isPopular ? 'text-gray-200' : ''"
              >
                {{ feat }}
              </BaseTypography>
            </BaseBox>
          </BaseBox>

          <BaseButton 
            :variant="plan.isPopular ? 'primary' : 'white'" 
            size="lg" 
            class="w-full shadow-lg"
          >
            Pilih {{ plan.name }}
          </BaseButton>
        </BaseCard>
      </BaseGrid>

      <!-- Visual Sample: Guarantee Section from Template -->
      <BaseBox display="flex" justifyContent="center" class="mt-24">
        <BaseCard variant="surface" padding="lg" radius="3xl" class="max-w-3xl w-full border-dashed">
          <BaseBox display="flex" alignItems="center" gap="lg" class="flex-col md:flex-row text-center md:text-left">
            <BaseIconWrapper icon="i-fluent-shield-checkmark-24-filled" color="emerald" size="lg" />
            <BaseBox>
              <BaseTypography variant="h3">Garansi Kepuasan 7 Hari</BaseTypography>
              <BaseTypography variant="p" color="muted" class="text-sm">
                Jika Anda merasa layanan kami tidak sesuai ekspektasi, kami akan mengembalikan dana Anda 100% tanpa pertanyaan.
              </BaseTypography>
            </BaseBox>
          </BaseBox>
        </BaseCard>
      </BaseBox>
    </BaseContainer>
  </NuxtLayout>
</template>
