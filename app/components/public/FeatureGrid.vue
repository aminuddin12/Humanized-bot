<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'
import BaseIconWrapper from '~/components/ui/BaseIconWrapper.vue'
import { usePublicData } from '~/composables/usePublicData'
import type { BotFeature } from '~/types'

const { features, activeFeature, selectFeature, pageData } = usePublicData()

const featureList = computed(() => pageData.features.list)
const title = computed(() => pageData.features.title)
const description = computed(() => pageData.features.description)

</script>

<template>
  <BaseContainer id="features" padding="md">
    <BaseBox display="flex" flexDirection="col" alignItems="center" gap="sm" class="mb-16 text-center max-w-2xl mx-auto">
      <BaseTypography variant="h2" align="center">{{ title }}</BaseTypography>
      <BaseTypography variant="p" align="center">{{ description }}</BaseTypography>
    </BaseBox>

    <BaseGrid cols="2" gap="lg" items="center">
      <BaseGrid cols="2" gap="sm">
        <BaseCard
          v-for="feature in featureList"
          :key="feature.id"
          variant="surface"
          padding="lg"
          radius="3xl"
          as="button"
          class="cursor-pointer flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 transform hover:-translate-y-1"
          :class="activeFeature.id === feature.id ? 'bg-alan-accent text-white dark:text-alan-dark shadow-glow border-alan-accent' : ''"
          @click="selectFeature(feature)"
        >
          <UIcon :name="feature.icon" class="text-4xl opacity-80" />
          <BaseTypography variant="detail">{{ feature.title }}</BaseTypography>
          <BaseBadge v-if="feature.is_premium" color="blue" size="sm">Premium</BaseBadge>
        </BaseCard>
      </BaseGrid>

      <BaseCard variant="surface" padding="xl" radius="special" display="flex" flexDirection="col">
        <BaseBox display="flex" alignItems="center" gap="sm" class="mb-8 pb-4 border-b border-gray-100 dark:border-dark-border">
          <BaseIconWrapper :icon="activeFeature.icon" color="dark" size="sm" />
          <BaseBox>
            <BaseTypography variant="detail" class="text-xs">SaaS Bot Engine</BaseTypography>
            <BaseTypography variant="detail" color="accent" class="text-[9px]">Feature Intelligence</BaseTypography>
          </BaseBox>
        </BaseBox>

        <BaseBox display="flex" flexDirection="col" gap="md" class="flex-grow">
          <BaseBox display="flex" justifyContent="end">
            <BaseBox background="dark" rounded="xl" class="px-5 py-3 max-w-[80%]">
              <BaseTypography variant="p" class="text-sm text-white">
                Bagaimana <BaseTypography variant="span" color="accent" class="underline font-bold">{{ activeFeature.title }}</BaseTypography> bekerja?
              </BaseTypography>
            </BaseBox>
          </BaseBox>
          
          <BaseBox display="flex" justifyContent="start">
            <BaseCard padding="md" radius="xl" class="max-w-[90%] shadow-sm">
              <BaseTypography variant="p" class="text-sm leading-relaxed mb-4">
                {{ activeFeature.description }}
                <BaseBox as="span" background="emerald" class="inline-block w-1.5 h-4 ml-1 align-middle animate-pulse" />
              </BaseTypography>
              
              <BaseBox background="emerald" rounded="xl" class="p-3 border border-emerald-100 dark:border-emerald-900/30">
                <BaseTypography variant="detail" color="muted" class="text-[9px] mb-2">Capabilities:</BaseTypography>
                <BaseBox display="flex" gap="sm" class="flex-wrap">
                  <BaseBadge size="sm" color="emerald">Automated</BaseBadge>
                  <BaseBadge size="sm" color="blue">Scalable</BaseBadge>
                </BaseBox>
              </BaseBox>
            </BaseCard>
          </BaseBox>
        </BaseBox>

        <BaseBox class="mt-8 pt-6 border-t border-gray-100 dark:border-dark-border text-center">
          <BaseButton variant="secondary" size="md" class="w-full sm:w-auto px-10" to="/demo">
            Try Demo
          </BaseButton>
        </BaseBox>
      </BaseCard>
    </BaseGrid>
  </BaseContainer>
</template>
