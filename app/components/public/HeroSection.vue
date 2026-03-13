<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

defineProps({
  badgeText: {
    type: String,
    default: 'Klinik+ Engine v2.5 Online'
  },
  headline: {
    type: String,
    required: true
  },
  highlightedText: {
    type: String,
    required: true
  },
  subline: {
    type: String,
    required: true
  },
  primaryCta: {
    type: Object,
    default: () => ({ label: 'Cek Gejala Sekarang', to: '#triage' })
  },
  secondaryCta: {
    type: Object,
    default: () => ({ label: 'Buat Janji Temu', to: '#doctors' })
  }
})
</script>

<template>
  <SectionWrapper class="pt-40 pb-20 md:pt-52 md:pb-32 min-h-[90vh] flex items-center">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
      <div class="elem-anim space-y-8 z-10 relative">
        <div class="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 px-4 py-2 rounded-full">
          <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span class="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">{{ badgeText }}</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-black text-alan-dark dark:text-white tracking-tighter leading-[1.1]">
          {{ headline }}<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">{{ highlightedText }}</span>
        </h1>
        
        <p class="text-lg md:text-xl text-alan-text-muted dark:text-gray-400 max-w-lg leading-relaxed">
          {{ subline }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <BaseButton size="lg" :to="primaryCta.to" class="group">
            {{ primaryCta.label }}
            <UIcon name="i-fluent-arrow-right-24-filled" class="group-hover:translate-x-1 transition-transform" />
          </BaseButton>
          <BaseButton variant="white" size="lg" :to="secondaryCta.to">
            <UIcon name="i-fluent-calendar-clock-24-regular" class="text-xl" /> {{ secondaryCta.label }}
          </BaseButton>
        </div>

        <div class="pt-8 flex items-center gap-6 opacity-60">
          <p class="text-[10px] font-bold text-alan-dark dark:text-white uppercase tracking-widest">Dipercaya Oleh</p>
          <div class="flex gap-4 text-2xl text-alan-text-muted dark:text-gray-500">
            <UIcon name="i-fluent-building-hospital-24-filled" />
            <UIcon name="i-fluent-shield-task-24-filled" />
            <UIcon name="i-fluent-data-usage-24-filled" />
          </div>
        </div>
      </div>

      <div class="relative h-[400px] md:h-[500px] flex items-center justify-center elem-anim z-10 hidden lg:flex">
        <div class="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-400 opacity-20 blur-3xl"></div>
        <div class="absolute w-48 h-48 rounded-[3rem] bg-white dark:bg-dark-surface border-4 border-white dark:border-dark-surface shadow-floating flex flex-col items-center justify-center transform rotate-12 float-slow z-20">
          <UIcon name="i-fluent-heart-pulse-32-filled" class="text-6xl text-emerald-500 mb-2" />
          <p class="font-black text-alan-dark dark:text-white text-lg">Vital Status</p>
          <p class="text-xs font-bold text-emerald-500">Normal</p>
        </div>

        <div class="absolute top-[10%] left-[-10%] w-56 bg-white dark:bg-[#121c18] border border-gray-100 dark:border-emerald-900/30 rounded-2xl p-4 shadow-floating float-fast z-30" style="animation-delay: -2s;">
          <div class="flex items-center gap-3">
            <div class="relative">
              <img src="https://i.pravatar.cc/100?img=5" class="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700">
              <div class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#121c18] rounded-full"></div>
            </div>
            <div>
              <p class="text-xs font-bold text-alan-dark dark:text-white">dr. Sarah Wijaya</p>
              <p class="text-[9px] text-gray-500">Spesialis Penyakit Dalam</p>
            </div>
          </div>
          <div class="mt-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase text-center py-1.5 rounded-lg">
            Tersedia Sekarang
          </div>
        </div>

        <div class="absolute bottom-[10%] right-[-10%] bg-alan-dark text-white rounded-2xl p-4 shadow-glow flex items-center gap-4 float-slow z-30" style="animation-delay: -1s;">
          <div class="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
            <UIcon name="i-fluent-bot-24-filled" class="text-xl" />
          </div>
          <div>
            <p class="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-0.5">Analisis Selesai</p>
            <p class="text-xs font-medium">Berdasarkan gejala Anda,<br>disarankan konsultasi umum.</p>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
