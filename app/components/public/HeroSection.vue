<script setup lang="ts">
import heroConfig from '~/configs/ui/hero-section.json'
import { resolveStyles } from '~/utils/ui'
import type { HeroContent } from '~/types'

defineProps<HeroContent>()

const styles = computed(() => resolveStyles(heroConfig, {}))
const slots = computed(() => (styles.value as any).slots)
</script>

<template>
  <section :class="slots.root">
    <!-- Background Decoration -->
    <div :class="slots.background">
      <div :class="slots.blob1" />
      <div :class="slots.blob2" />
    </div>

    <BaseContainer padding="hero">
      <div :class="slots.grid">
        <div :class="slots.content">
          <div :class="slots.badge">
            <div :class="slots.badgeDot" />
            <span :class="slots.badgeText">{{ badgeText }}</span>
          </div>
          
          <BaseTypography variant="h1">
            {{ headline }}<br />
            <span class="text-primary">{{ highlightedText }}</span>
          </BaseTypography>
          
          <BaseTypography variant="p">
            {{ subline }}
          </BaseTypography>
          
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <BaseButton size="lg" :to="primaryCta.to">
              {{ primaryCta.label }}
              <UIcon name="i-fluent-arrow-right-24-filled" class="group-hover:translate-x-1 transition-transform" />
            </BaseButton>
            <BaseButton variant="glass" size="lg" :to="secondaryCta.to">
              <UIcon name="i-fluent-calendar-clock-24-regular" /> {{ secondaryCta.label }}
            </BaseButton>
          </div>

          <div class="pt-8 flex items-center gap-6 opacity-60">
            <BaseTypography variant="detail">Integrasi Utama</BaseTypography>
            <div class="flex gap-4 text-2xl text-secondary">
              <UIcon name="i-fluent-spreadsheet-24-filled" class="hover:text-primary transition-colors" />
              <UIcon name="i-fluent-calendar-ltr-24-filled" class="hover:text-primary transition-colors" />
              <UIcon name="i-fluent-cloud-24-filled" class="hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        <div :class="slots.visual">
          <!-- Main Visual Card -->
          <BaseCard variant="glass" padding="xl" radius="4xl" class="w-full aspect-[4/3] flex flex-col items-center justify-center border-white/40 shadow-2xl">
            <div class="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <UIcon name="i-fluent-bot-24-filled" class="text-5xl text-primary" />
            </div>
            <BaseTypography variant="h3" class="mb-2">AI Agent Live</BaseTypography>
            <BaseTypography variant="p" class="text-base text-center">Smart humanized interactions<br/>happening in real-time.</BaseTypography>
            
            <div class="mt-8 flex gap-2">
              <div v-for="i in 3" :key="i" class="w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse" :style="{ animationDelay: `${i * 0.2}s` }" />
            </div>
          </BaseCard>

          <!-- Floating Badges -->
          <BaseCard variant="featured" padding="sm" radius="3xl" class="absolute -top-10 -left-10 w-56 flex items-center gap-4 animate-bounce-slow">
             <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
               <UIcon name="i-fluent-flash-24-filled" class="text-xl text-white" />
             </div>
             <div>
               <div class="text-[10px] font-bold uppercase opacity-80">Sync Speed</div>
               <div class="text-lg font-black">0.2s Reply</div>
             </div>
          </BaseCard>

          <BaseCard variant="white" padding="sm" radius="3xl" class="absolute -bottom-8 -right-8 w-64 shadow-2xl border-gray-100 flex items-center gap-4">
             <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
               <img src="https://i.pravatar.cc/100?img=12" alt="Customer" class="w-full h-full object-cover" />
             </div>
             <div>
               <div class="text-xs font-bold text-secondary">Customer Support</div>
               <div class="text-[10px] text-primary">Verified Human-like Response</div>
             </div>
          </BaseCard>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
</style>
