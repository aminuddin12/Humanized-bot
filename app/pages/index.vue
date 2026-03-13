<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import HeroSection from '~/components/public/HeroSection.vue'
import RunningText from '~/components/blocks/RunningText.vue'
import RunningBrands from '~/components/blocks/RunningBrands.vue'
import FeatureGrid from '~/components/public/FeatureGrid.vue'
import JourneySection from '~/components/public/JourneySection.vue'
import { usePublicData } from '~/composables/usePublicData'

const { pageData } = usePublicData()

useHead({
  title: 'Smart Humanized Bot - Leading AI SaaS Automation',
  meta: [
    { name: 'description', content: 'Transform your customer support with human-like AI bots.' }
  ]
})
</script>

<template>
  <NuxtLayout name="default">
    <BaseBox class="w-full">
      
      <!-- Hero Section -->
      <HeroSection v-bind="pageData.hero" />

      <!-- Running Text (Marquee) -->
      <RunningText text="Humanized AI . Scalable SaaS . 24/7 Automation . Multi-Channel Support . Smart Integrations" />

      <!-- Running Brands -->
      <RunningBrands />

      <!-- Features -->
      <FeatureGrid 
        title="Everything you need to scale." 
        description="Our platform provides all the tools necessary to automate your customer interactions at any scale."
      />

      <!-- Journey -->
      <JourneySection />

      <!-- Running Text Slow -->
      <RunningText text="Trusted by 1000+ Companies Globally . Get Started Today" speed="slow" />

    </BaseBox>
  </NuxtLayout>
</template>
