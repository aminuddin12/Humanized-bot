<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'

defineProps({
  text: { type: String, required: true },
  speed: { type: String, default: 'normal' }
})
</script>

<template>
  <BaseBox background="dark" class="py-4 overflow-hidden border-y border-white/10">
    <BaseBox :class="speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'">
      <BaseBox v-for="i in 10" :key="i" display="flex" alignItems="center" gap="md" class="px-4">
        <BaseTypography variant="detail" class="text-white font-black whitespace-nowrap text-lg uppercase tracking-tighter opacity-50">
          {{ text }}
        </BaseTypography>
        <UIcon name="i-fluent-star-24-filled" class="text-emerald-500 text-xl" />
      </BaseBox>
    </BaseBox>
  </BaseBox>
</template>
