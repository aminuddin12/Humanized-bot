<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'overflow-hidden'
  }
})
</script>

<template>
  <div class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 relative min-h-screen flex items-center justify-center p-6">
    
    <!-- Background Orbs -->
    <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
    <div class="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

    <div class="fixed top-6 right-6 z-50">
      <ThemeToggle />
    </div>

    <div class="w-full max-w-md relative z-10">
      <NuxtLink to="/" class="flex items-center justify-center gap-2 mb-12 group">
        <div class="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <UIcon name="i-fluent-bot-24-filled" class="text-2xl text-white" />
        </div>
        <span class="text-2xl font-black tracking-tight text-slate-900 dark:text-white">SaaSBot</span>
      </NuxtLink>

      <UCard class="rounded-[2.5rem] shadow-2xl overflow-visible ring-1 ring-slate-200 dark:ring-slate-800">
        <slot />
      </UCard>
      
      <div class="mt-12 text-center">
        <p class="text-[10px] uppercase font-black tracking-widest text-slate-400">
          &copy; 2026 SaaS Bot Engine. All Rights Reserved.
        </p>
      </div>
    </div>

  </div>
</template>
