<script setup lang="ts">
const brands = [
  'i-logos-google', 'i-logos-microsoft', 'i-logos-slack-icon', 'i-logos-whatsapp-icon',
  'i-logos-telegram', 'i-logos-facebook', 'i-logos-instagram-icon', 'i-logos-twitter'
]
</script>

<template>
  <div class="py-12 overflow-hidden bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
    <div class="flex whitespace-nowrap animate-marquee">
      <div v-for="i in 4" :key="i" class="flex items-center gap-16 px-8">
        <UIcon 
          v-for="brand in brands" 
          :key="brand" 
          :name="brand" 
          class="text-5xl grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" 
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}
</style>
