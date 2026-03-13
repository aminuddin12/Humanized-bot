<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'
import BaseIconWrapper from '~/components/ui/BaseIconWrapper.vue'
import BaseImage from '~/components/ui/BaseImage.vue'
import type { HeroContent } from '~/types'

defineProps<HeroContent>()
</script>

<template>
  <BaseContainer padding="hero">
    <BaseGrid cols="2" gap="lg" items="center">
      <BaseBox display="flex" flexDirection="col" gap="md">
        <BaseBadge color="emerald">
          {{ badgeText }}
        </BaseBadge>
        
        <BaseTypography variant="h1">
          {{ headline }}<br />
          <BaseTypography variant="span" color="gradient">{{ highlightedText }}</BaseTypography>
        </BaseTypography>
        
        <BaseTypography variant="p">
          {{ subline }}
        </BaseTypography>
        
        <BaseBox display="flex" gap="sm">
          <BaseButton size="lg" :to="primaryCta.to">
            {{ primaryCta.label }}
            <UIcon name="i-fluent-arrow-right-24-filled" />
          </BaseButton>
          <BaseButton variant="white" size="lg" :to="secondaryCta.to">
            <UIcon name="i-fluent-calendar-clock-24-regular" /> {{ secondaryCta.label }}
          </BaseButton>
        </BaseBox>

        <BaseBox display="flex" alignItems="center" gap="md">
          <BaseTypography variant="detail" color="muted">Integrasi Utama</BaseTypography>
          <BaseBox display="flex" gap="sm">
            <UIcon name="i-fluent-spreadsheet-24-filled" class="text-2xl text-emerald-500" />
            <UIcon name="i-fluent-calendar-ltr-24-filled" class="text-2xl text-blue-500" />
            <UIcon name="i-fluent-cloud-24-filled" class="text-2xl text-sky-500" />
          </BaseBox>
        </BaseBox>
      </BaseBox>

      <BaseBox display="flex" alignItems="center" justifyContent="center">
        <BaseSurface effects="blur-3xl" position="absolute" inset="center" />
        
        <!-- Bot Performance Card -->
        <BaseSurface 
          background="white" 
          elevation="floating" 
          rounded="2xl" 
          as="div"
          class="w-56 h-56 border border-gray-100 dark:border-gray-800 rotate-6 p-6 flex flex-col items-center justify-center animate-float-slow"
        >
          <BaseSurface background="emerald" rounded="full" class="w-16 h-16 flex items-center justify-center mb-4">
            <BaseIconWrapper icon="i-fluent-flash-24-filled" color="white" size="lg" />
          </BaseSurface>
          <BaseTypography variant="h3" class="text-xl">99.9%</BaseTypography>
          <BaseTypography variant="detail" color="accent">Bot Uptime</BaseTypography>
        </BaseSurface>

        <!-- User Status Card -->
        <BaseSurface 
          position="absolute" 
          inset="floating-top-left" 
          background="white" 
          rounded="xl" 
          elevation="floating" 
          as="div"
          class="w-64 p-5 border border-gray-100 dark:border-emerald-900/30 animate-float-fast"
        >
          <BaseBox display="flex" alignItems="center" gap="sm">
            <BaseBox position="relative">
              <BaseImage src="https://i.pravatar.cc/100?img=11" alt="User" rounded="full" class="w-10 h-10" />
              <BaseSurface background="emerald" rounded="full" class="absolute bottom-0 right-0 w-3 h-3 border-2 border-white dark:border-dark-surface" />
            </BaseBox>
            <BaseBox display="flex" flexDirection="col">
              <BaseTypography variant="detail" class="text-xs">User @0812XXX</BaseTypography>
              <BaseTypography variant="detail" color="muted" class="text-[9px]">Verified Premium Account</BaseTypography>
            </BaseBox>
          </BaseBox>
          <BaseSurface background="glass" rounded="md" class="mt-4 p-2 text-center border border-emerald-500/10">
            <BaseTypography variant="detail" color="accent">AI Responding...</BaseTypography>
          </BaseSurface>
        </BaseSurface>

        <!-- AI Bot Node -->
        <BaseSurface 
          position="absolute" 
          inset="floating-bottom-right" 
          background="dark" 
          rounded="xl" 
          elevation="glow" 
          as="div"
          class="p-4 flex items-center gap-3 animate-float-slow"
        >
          <BaseSurface background="emerald" rounded="lg" class="p-2">
            <BaseIconWrapper icon="i-fluent-bot-24-filled" color="white" size="sm" />
          </BaseSurface>
          <BaseBox display="flex" flexDirection="col">
            <BaseTypography variant="detail" color="accent" class="mb-0.5">Automated CS</BaseTypography>
            <BaseTypography variant="detail" class="text-white text-[10px]">Smart humanized reply sent!</BaseTypography>
          </BaseBox>
        </BaseSurface>
      </BaseBox>
    </BaseGrid>
  </BaseContainer>
</template>
