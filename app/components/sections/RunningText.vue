<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="py-12 overflow-hidden bg-secondary border-y border-white/5 relative z-10">
    <div class="flex whitespace-nowrap animate-marquee">
      <div v-for="i in 10" :key="i" class="flex items-center gap-12 px-6">
        <span class="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white opacity-20">
          {{ text }}
        </span>
        <UIcon name="i-fluent-star-24-filled" class="text-primary opacity-40 text-2xl" />
      </div>
    </div>
  </div>
</template>
