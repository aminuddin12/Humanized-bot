<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const props = defineProps({
  isOpen: { type: Boolean, default: false }
})

const emit = defineEmits(['close'])

const searchQuery = ref('')
const results = ref([
  { title: 'How to integrate with WhatsApp', category: 'Documentation' },
  { title: 'Pricing for Enterprise', category: 'Pricing' },
  { title: 'AI Humanized Settings', category: 'Help' }
])

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <transition 
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <BaseBox 
      v-if="isOpen" 
      position="fixed" 
      class="inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
      @click.self="handleClose"
    >
      <BaseSurface variant="default" padding="none" class="w-full max-w-2xl rounded-[2.5rem] shadow-2xl border overflow-hidden">
        <!-- Search Input Header -->
        <BaseBox display="flex" alignItems="center" gap="md" class="p-6 border-b">
          <UIcon name="i-fluent-search-24-regular" class="text-2xl text-emerald-500" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search for features, docs, or integrations..." 
            class="flex-grow bg-transparent border-none outline-none text-lg font-medium text-gray-900 dark:text-white placeholder:text-gray-400"
            autofocus
          />
          <BaseButton variant="ghost" size="sm" @click="handleClose">
            <UIcon name="i-fluent-dismiss-24-regular" class="text-xl" />
          </BaseButton>
        </BaseBox>

        <!-- Search Content -->
        <BaseBox class="p-6 max-h-[60vh] overflow-auto">
          <BaseBox v-if="!searchQuery" display="flex" flexDirection="col" gap="md">
            <BaseTypography variant="detail" color="muted">Popular Searches</BaseTypography>
            <BaseBox display="flex" flexWrap="wrap" gap="sm">
              <BaseButton v-for="tag in ['WhatsApp API', 'Pricing', 'Webhooks', 'Setup']" :key="tag" variant="outline" size="sm" class="rounded-full">
                {{ tag }}
              </BaseButton>
            </BaseBox>
          </BaseBox>

          <BaseBox v-else display="flex" flexDirection="col" gap="sm">
            <NuxtLink 
              v-for="res in results" 
              :key="res.title" 
              to="#"
              class="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
            >
              <BaseBox display="flex" alignItems="center" gap="md">
                <UIcon name="i-fluent-document-24-regular" class="text-xl text-gray-400 group-hover:text-emerald-500" />
                <BaseTypography variant="p" class="text-sm font-bold">{{ res.title }}</BaseTypography>
              </BaseBox>
              <BaseBadge color="blue" size="sm">{{ res.category }}</BaseBadge>
            </NuxtLink>
          </BaseBox>
        </BaseBox>

        <!-- Footer -->
        <BaseBox background="dark" class="p-4 bg-gray-50 dark:bg-black/20 flex items-center justify-between">
          <BaseTypography variant="detail" color="muted" class="text-[10px]">
            Tip: Press <BaseTypography variant="span" class="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">ESC</BaseTypography> to close
          </BaseTypography>
          <BaseTypography variant="detail" color="accent" class="text-[10px] font-black uppercase tracking-widest cursor-pointer">
            View All Results
          </BaseTypography>
        </BaseBox>
      </BaseSurface>
    </BaseBox>
  </transition>
</template>
