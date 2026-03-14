<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="py-6 overflow-hidden bg-slate-900 dark:bg-black border-y border-white/5">
    <div class="flex whitespace-nowrap animate-marquee">
      <div v-for="i in 10" :key="i" class="flex items-center gap-8 px-4">
        <span class="text-lg font-black uppercase tracking-tighter text-white opacity-30">
          {{ text }}
        </span>
        <UIcon name="i-fluent-star-24-filled" class="text-emerald-500 opacity-20" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee-text {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee-text 30s linear infinite;
}
</style>
