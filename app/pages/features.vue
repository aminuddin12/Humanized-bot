<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseIconWrapper from '~/components/ui/BaseIconWrapper.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'
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
    <BaseBox position="relative" class="w-full overflow-hidden">
      <!-- Visual Sample: Glowing Background from Template -->
      <BaseBox 
        position="absolute" 
        class="top-[-5%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vw] rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen opacity-20"
        background="emerald"
      />

      <BaseContainer padding="lg" class="relative z-10">
        <BaseBox display="flex" flexDirection="col" alignItems="center" gap="sm" class="mb-20 text-center max-w-4xl mx-auto">
          <!-- Visual Sample: Animated Badge from Template -->
          <BaseBadge color="emerald" class="mb-4 animate-bounce">
            <BaseBox display="flex" alignItems="center" gap="xs">
              <UIcon name="i-fluent-bot-24-filled" />
              SaaS Engine Pro
            </BaseBox>
          </BaseBadge>
          
          <BaseTypography variant="h1" align="center">
            {{ title }}
          </BaseTypography>
          
          <BaseTypography variant="p" align="center">
            {{ description }}
          </BaseTypography>
        </BaseBox>

        <!-- Adaptive Grid: 1 on Mobile, 2 on Tablet, 3 on Desktop -->
        <BaseGrid cols="3" gap="lg">
          <BaseCard 
            v-for="feature in features" 
            :key="feature.id" 
            padding="xl" 
            radius="3xl" 
            class="group hover:border-alan-accent transition-all duration-500 h-full flex flex-col"
          >
            <!-- Visual Sample: Icon Wrapper with scaling from Template -->
            <BaseIconWrapper 
              :icon="feature.icon" 
              color="dark" 
              size="lg" 
              class="mb-8 group-hover:scale-110 transition-transform shadow-sm" 
            />
            
            <BaseBox display="flex" alignItems="center" gap="sm" class="mb-4">
              <BaseTypography variant="h3">{{ feature.name }}</BaseTypography>
              <BaseBadge v-if="feature.isPremium" color="blue" size="sm">Pro</BaseBadge>
            </BaseBox>
            
            <BaseTypography variant="p" color="muted" class="text-sm flex-grow">
              {{ feature.description }}
            </BaseTypography>
          </BaseCard>
        </BaseGrid>
      </BaseContainer>
    </BaseBox>
  </NuxtLayout>
</template>
