<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  bodyZones: {
    type: Array,
    required: true
  }
})

const activeZone = ref(props.bodyZones[0])

const selectZone = (zone) => {
  activeZone.value = zone
}
</script>

<template>
  <SectionWrapper id="triage" class="py-20 md:py-32 bg-white dark:bg-[#070b09] border-y border-gray-100 dark:border-dark-border">
    <div class="text-center max-w-2xl mx-auto mb-16 elem-anim">
      <h2 class="text-3xl md:text-5xl font-black text-alan-dark dark:text-white tracking-tight mb-4">{{ title }}</h2>
      <p class="text-alan-text-muted dark:text-gray-400">{{ description }}</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <div class="lg:col-span-5 grid grid-cols-2 gap-3 elem-anim">
        <BaseCard
          v-for="zone in bodyZones"
          :key="zone.id"
          variant="surface"
          padding="lg"
          radius="3xl"
          class="cursor-pointer flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 transform hover:-translate-y-1"
          :class="activeZone.id === zone.id ? 'bg-alan-accent text-white dark:text-alan-dark shadow-glow border-alan-accent dark:border-alan-accent' : 'hover:border-alan-accent hover:bg-white dark:hover:bg-dark-surface'"
          @click="selectZone(zone)"
        >
          <UIcon :name="'i-' + zone.icon.replace(/:/g, '-')" class="text-4xl opacity-80" />
          <span class="font-bold text-sm">{{ zone.name }}</span>
        </BaseCard>
      </div>

      <BaseCard lg:col-span-7 variant="surface" padding="xl" radius="special" class="flex flex-col elem-anim">
        <div class="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div class="w-10 h-10 rounded-full bg-alan-accent text-white flex items-center justify-center shadow-glow">
            <UIcon name="i-fluent-brain-circuit-24-filled" class="text-xl" />
          </div>
          <div>
            <h3 class="font-black text-alan-dark dark:text-white">Klinik+ Triage AI</h3>
            <p class="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Sistem Pendukung Keputusan</p>
          </div>
        </div>

        <div class="flex-grow space-y-6">
          <div class="flex justify-end">
            <div class="bg-alan-dark dark:bg-white text-white dark:text-alan-dark px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
              <p class="text-sm font-medium">Saya memiliki keluhan di area <span class="font-bold underline">{{ activeZone.name }}</span>.</p>
            </div>
          </div>
          
          <div class="flex justify-start">
            <BaseCard padding="md" class="border border-gray-200 dark:border-gray-800 text-alan-dark dark:text-gray-300 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm">
              <p class="text-sm leading-relaxed mb-4">
                {{ activeZone.aiResponse }}
                <span class="typing-cursor inline-block w-1.5 h-4 bg-alan-accent ml-1 align-middle"></span>
              </p>
              
              <div class="bg-gray-50 dark:bg-dark-bg p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Rekomendasi Spesialis:</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="spec in activeZone.specialists" :key="spec" class="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">{{ spec }}</span>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <BaseButton variant="secondary" size="md" class="w-full sm:w-auto px-10">
            Mulai Triage Lengkap (Gratis)
          </BaseButton>
        </div>
      </BaseCard>
    </div>
  </SectionWrapper>
</template>
