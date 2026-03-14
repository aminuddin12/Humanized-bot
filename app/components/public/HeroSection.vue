<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseContainer from '~/components/ui/BaseContainer.vue'
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
    <BaseBox layout="hero-grid">
      <BaseBox layout="flex-col-md" gap="md">
        <BaseBadge color="emerald">
          {{ badgeText }}
        </BaseBadge>
        
        <BaseTypography variant="h1">
          {{ headline }}<br />
          <BaseTypography variant="span" variant-alias="accent-gradient">{{ highlightedText }}</BaseTypography>
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
          <BaseTypography variant="detail" class="opacity-60">Integrasi Utama</BaseTypography>
          <BaseBox display="flex" gap="sm">
            <UIcon name="i-fluent-spreadsheet-24-filled" class="text-2xl text-emerald-500" />
            <UIcon name="i-fluent-calendar-ltr-24-filled" class="text-2xl text-blue-500" />
            <UIcon name="i-fluent-cloud-24-filled" class="text-2xl text-sky-500" />
          </BaseBox>
        </BaseBox>
      </BaseBox>

      <BaseBox layout="hero-visual-root">
        <BaseSurface variant="blur-orb" />
        
        <!-- Bot Performance Card -->
        <BaseBox layout="status-card-1" theme="floating-card">
          <BaseSurface variant="emerald-full" class="w-16 h-16 flex items-center justify-center mb-4">
            <BaseIconWrapper icon="i-fluent-flash-24-filled" color="white" size="lg" />
          </BaseSurface>
          <BaseTypography variant="h3" class="text-xl">99.9%</BaseTypography>
          <BaseTypography variant="detail" class="text-emerald-500">Bot Uptime</BaseTypography>
        </BaseBox>

        <!-- User Status Card -->
        <BaseBox layout="status-card-2" theme="floating-card">
          <BaseBox display="flex" alignItems="center" gap="sm">
            <BaseBox position="relative">
              <BaseImage src="https://i.pravatar.cc/100?img=11" alt="User" rounded="full" class="w-10 h-10" />
              <BaseSurface variant="emerald-full" class="absolute bottom-0 right-0 w-3 h-3 border-2 border-white dark:border-gray-950" />
            </BaseBox>
            <BaseBox layout="stack-xs">
              <BaseTypography variant="detail" class="text-xs">User @0812XXX</BaseTypography>
              <BaseTypography variant="detail" class="text-[9px] opacity-60">Verified Premium Account</BaseTypography>
            </BaseBox>
          </BaseBox>
          <BaseSurface variant="glass" class="mt-4 p-2 text-center rounded-md border border-emerald-500/10">
            <BaseTypography variant="detail" class="text-emerald-500">AI Responding...</BaseTypography>
          </BaseSurface>
        </BaseBox>

        <!-- AI Bot Node -->
        <BaseBox layout="bot-node" theme="glow-card">
          <BaseSurface variant="emerald-lg" class="p-2">
            <BaseIconWrapper icon="i-fluent-bot-24-filled" color="white" size="sm" />
          </BaseSurface>
          <BaseBox layout="stack-xs">
            <BaseTypography variant="detail" class="mb-0.5 text-emerald-400">Automated CS</BaseTypography>
            <BaseTypography variant="detail" class="text-white text-[10px]">Smart humanized reply sent!</BaseTypography>
          </BaseBox>
        </BaseBox>
      </BaseBox>
    </BaseBox>
  </BaseContainer>
</template>
