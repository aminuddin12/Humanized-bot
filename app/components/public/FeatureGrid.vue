<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'
import BaseIconWrapper from '~/components/ui/BaseIconWrapper.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import { usePublicData } from '~/composables/usePublicData'

const { features, activeFeature, selectFeature, pageData } = usePublicData()

const featureList = computed(() => pageData.features.list)
const title = computed(() => pageData.features.title)
const description = computed(() => pageData.features.description)

</script>

<template>
  <BaseContainer id="features" padding="md">
    <BaseBox layout="section-header">
      <BaseTypography variant="h2">{{ title }}</BaseTypography>
      <BaseTypography variant="p">{{ description }}</BaseTypography>
    </BaseBox>

    <BaseBox layout="grid-2">
      <BaseBox display="grid" class="grid-cols-2 gap-4">
        <BaseCard
          v-for="feature in featureList"
          :key="feature.id"
          variant="surface"
          padding="lg"
          radius="3xl"
          as="button"
          layout="feature-card"
          :class="activeFeature.id === feature.id ? 'bg-emerald-500 text-white dark:text-gray-950 shadow-glow border-emerald-500' : ''"
          @click="selectFeature(feature)"
        >
          <UIcon :name="feature.icon" class="text-4xl opacity-80" />
          <BaseTypography variant="detail" :class="activeFeature.id === feature.id ? 'text-gray-950' : ''">{{ feature.title }}</BaseTypography>
          <BaseBadge v-if="feature.is_premium" color="blue" size="sm">Premium</BaseBadge>
        </BaseCard>
      </BaseBox>

      <BaseCard variant="surface" padding="xl" radius="special" display="flex" flexDirection="col">
        <BaseBox layout="flex-row-sm" class="mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
          <BaseIconWrapper :icon="activeFeature.icon" color="dark" size="sm" />
          <BaseBox layout="stack-xs">
            <BaseTypography variant="detail" class="text-xs">SaaS Bot Engine</BaseTypography>
            <BaseTypography variant="detail" class="text-[9px] text-emerald-500">Feature Intelligence</BaseTypography>
          </BaseBox>
        </BaseBox>

        <BaseBox layout="flex-col-md" class="flex-grow">
          <BaseBox layout="chat-user" theme="glow-card">
            <BaseTypography variant="p" class="text-sm text-white">
              Bagaimana <BaseTypography variant="span" class="underline font-bold text-emerald-400">{{ activeFeature.title }}</BaseTypography> bekerja?
            </BaseTypography>
          </BaseBox>
          
          <BaseBox display="flex" justifyContent="start">
            <BaseBox layout="chat-bot" theme="card">
              <BaseTypography variant="p" class="text-sm leading-relaxed mb-4">
                {{ activeFeature.description }}
                <BaseBox as="span" class="inline-block w-1.5 h-4 ml-1 align-middle animate-pulse bg-emerald-500" />
              </BaseTypography>
              
              <BaseBox theme="surface-alt" class="p-3 border border-emerald-100 dark:border-emerald-900/30 rounded-xl">
                <BaseTypography variant="detail" class="text-[9px] mb-2 opacity-60">Capabilities:</BaseTypography>
                <BaseBox display="flex" gap="sm" class="flex-wrap">
                  <BaseBadge size="sm" color="emerald">Automated</BaseBadge>
                  <BaseBadge size="sm" color="blue">Scalable</BaseBadge>
                </BaseBox>
              </BaseBox>
            </BaseBox>
          </BaseBox>
        </BaseBox>

        <BaseBox class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
          <BaseButton variant="secondary" size="md" class="w-full sm:w-auto px-10" to="/register">
            Try Demo
          </BaseButton>
        </BaseBox>
      </BaseCard>
    </BaseBox>
  </BaseContainer>
</template>
