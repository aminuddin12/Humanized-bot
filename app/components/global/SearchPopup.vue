<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const searchQuery = ref('')
const results = ref([
  { title: 'How to integrate with WhatsApp', category: 'Documentation', to: '/docs/integrations' },
  { title: 'Pricing for Enterprise', category: 'Pricing', to: '/pricing' },
  { title: 'AI Humanized Settings', category: 'Help', to: '/docs/training' }
])

const handleClose = () => {
  emit('close')
}

// Close on ESC
onMounted(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.isOpen) handleClose()
  }
  window.addEventListener('keydown', handleEsc)
  onUnmounted(() => window.removeEventListener('keydown', handleEsc))
})
</script>

<template>
  <Teleport to="body">
    <Transition 
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm"
        @click.self="handleClose"
      >
        <Transition 
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="scale-95 translate-y-4"
          enter-to-class="scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="scale-100 translate-y-0"
          leave-to-class="scale-95 translate-y-4"
        >
          <UCard class="w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-white/20">
            <template #header>
              <div class="flex items-center gap-4">
                <UIcon name="i-fluent-search-24-regular" class="text-2xl text-emerald-500" />
                <input 
                  v-model="searchQuery"
                  type="text" 
                  placeholder="Search features, docs, or integrations..." 
                  class="flex-grow bg-transparent border-none outline-none text-lg font-medium text-slate-900 dark:text-white placeholder:text-slate-400"
                  autofocus
                />
                <UButton variant="ghost" color="gray" icon="i-fluent-dismiss-24-regular" @click="handleClose" />
              </div>
            </template>

            <div class="max-h-[60vh] overflow-auto py-4">
              <div v-if="!searchQuery" class="flex flex-col gap-6">
                <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Popular Searches</div>
                <div class="flex flex-wrap gap-2 px-2">
                  <UButton v-for="tag in ['WhatsApp API', 'Pricing', 'Webhooks', 'Setup']" :key="tag" variant="soft" color="emerald" size="xs" class="rounded-full">
                    {{ tag }}
                  </UButton>
                </div>
              </div>

              <div v-else class="flex flex-col gap-2">
                <NuxtLink 
                  v-for="res in results" 
                  :key="res.title" 
                  :to="res.to"
                  class="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
                  @click="handleClose"
                >
                  <div class="flex items-center gap-4">
                    <UIcon name="i-fluent-document-24-regular" class="text-xl text-slate-400 group-hover:text-emerald-500" />
                    <span class="text-sm font-bold text-slate-700 dark:text-slate-200">{{ res.title }}</span>
                  </div>
                  <UBadge color="blue" variant="subtle" size="xs">{{ res.category }}</UBadge>
                </NuxtLink>
              </div>
            </div>

            <template #footer>
              <div class="flex items-center justify-between opacity-60">
                <div class="text-[10px] font-medium text-slate-500">
                  Tip: Press <span class="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded mx-1 font-bold">ESC</span> to close
                </div>
                <UButton variant="link" color="emerald" size="xs" class="font-black uppercase tracking-widest">
                  View All Results
                </UButton>
              </div>
            </template>
          </UCard>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
