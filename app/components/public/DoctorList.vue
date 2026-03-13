<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import SectionWrapper from '@/components/ui/SectionWrapper.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  doctors: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <SectionWrapper id="doctors" class="py-20 md:py-32">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 elem-anim gap-4">
      <div class="max-w-lg">
        <h2 class="text-3xl md:text-5xl font-black text-alan-dark dark:text-white tracking-tight mb-3">{{ title }}</h2>
        <p class="text-alan-text-muted dark:text-gray-400">{{ description }}</p>
      </div>
      <button class="text-sm font-black text-alan-accent hover:underline flex items-center gap-1 shrink-0">
        Lihat Semua Dokter <UIcon name="i-fluent-arrow-right-16-filled" />
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <BaseCard
        v-for="doc in doctors"
        :key="doc.id"
        radius="full"
        class="group doc-card"
      >
        <div class="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 z-10 shadow-sm border border-gray-100 dark:border-gray-800">
          <div class="w-1.5 h-1.5 rounded-full animate-pulse" :class="doc.isLive ? 'bg-emerald-500' : 'bg-orange-500'"></div>
          <span class="text-[8px] font-black uppercase tracking-widest" :class="doc.isLive ? 'text-emerald-600 dark:text-emerald-400' : 'text-orange-600 dark:text-orange-400'">{{ doc.isLive ? 'Online' : 'In Call' }}</span>
        </div>

        <div class="w-full aspect-square rounded-[1.5rem] bg-gray-100 dark:bg-dark-bg overflow-hidden mb-5">
          <img :src="doc.image" :alt="doc.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100">
        </div>
        
        <h3 class="font-black text-alan-dark dark:text-white text-lg leading-tight">{{ doc.name }}</h3>
        <p class="text-xs text-alan-text-muted dark:text-gray-400 mb-4">{{ doc.spec }}</p>
        
        <div class="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
          <div class="flex items-center gap-1 text-xs font-bold text-alan-dark dark:text-white">
            <UIcon name="i-fluent-star-16-filled" class="text-yellow-400" /> {{ doc.rating }}
          </div>
          <p class="text-[10px] font-black text-gray-400">{{ doc.exp }} Pengalaman</p>
        </div>
        
        <div class="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-white via-white to-transparent dark:from-dark-surface dark:via-dark-surface dark:to-transparent pt-12">
          <BaseButton variant="secondary" size="md" class="w-full" :disabled="!doc.isLive">
            {{ doc.isLive ? 'Mulai Konsultasi' : 'Beritahu Saya' }}
          </BaseButton>
        </div>
      </BaseCard>
    </div>
  </SectionWrapper>
</template>
