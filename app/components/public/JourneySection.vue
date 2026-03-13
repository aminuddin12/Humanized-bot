<script setup>
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
</script>

<template>
  <SectionWrapper class="py-20 md:py-32 bg-gray-50 dark:bg-[#050a08] border-t border-gray-200 dark:border-dark-border relative overflow-hidden">
    <div class="text-center mb-16 elem-anim relative z-10">
      <h2 class="text-3xl md:text-5xl font-black text-alan-dark dark:text-white tracking-tight mb-4">Satu Aplikasi. Solusi Penuh.</h2>
      <p class="text-alan-text-muted dark:text-gray-400">Ekosistem terintegrasi yang memudahkan perjalanan penyembuhan Anda.</p>
    </div>

    <div class="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 py-10 elem-anim z-10">
      <svg class="hidden md:block absolute top-1/2 left-20 right-20 w-[calc(100%-160px)] h-24 -translate-y-1/2 z-0 opacity-30" preserveAspectRatio="none">
        <path d="M 0 50 Q 25% 100 50% 50 T 100% 50" fill="none" stroke="#00d68f" stroke-width="4" stroke-linecap="round" class="journey-path" />
      </svg>

      <BaseCard radius="special" padding="lg" class="w-full md:w-64 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
        <div class="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center text-3xl mb-4 shadow-sm">
          <UIcon name="i-fluent-phone-chat-24-filled" />
        </div>
        <h4 class="font-black text-alan-dark dark:text-white text-base mb-2">1. Telekonsultasi</h4>
        <p class="text-xs text-gray-500">Video call HD dengan dokter kapan saja, di mana saja.</p>
      </BaseCard>

      <BaseCard variant="default" radius="special" padding="lg" class="w-full md:w-64 flex flex-col items-center text-center shadow-floating hover:-translate-y-2 transition-transform transform md:-translate-y-6">
        <div class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center text-3xl mb-4 shadow-glow">
          <UIcon name="i-fluent-document-pill-24-filled" />
        </div>
        <h4 class="font-black text-alan-dark dark:text-white text-base mb-2">2. Resep Elektronik</h4>
        <p class="text-xs text-gray-500">Resep obat digital langsung terhubung ke apotek mitra.</p>
      </BaseCard>

      <BaseCard radius="special" padding="lg" class="w-full md:w-64 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
        <div class="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-900/20 text-orange-500 flex items-center justify-center text-3xl mb-4 shadow-sm">
          <UIcon name="i-fluent-vehicle-truck-cube-24-filled" />
        </div>
        <h4 class="font-black text-alan-dark dark:text-white text-base mb-2">3. Pengiriman Cepat</h4>
        <p class="text-xs text-gray-500">Obat diantar ke depan pintu Anda kurang dari 1 jam.</p>
      </BaseCard>
    </div>
  </SectionWrapper>
</template>
