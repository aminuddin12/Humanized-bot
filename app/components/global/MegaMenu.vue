<script setup lang="ts">
interface MegaMenuItem {
  title: string
  desc: string
  icon: string
  to: string
}

defineProps<{
  items: MegaMenuItem[]
  title?: string
  banner?: {
    title: string
    desc: string
    cta: string
    to: string
  }
}>()
</script>

<template>
  <div class="w-[600px] p-6 rounded-[2rem] shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex gap-8">
    <div class="flex flex-col gap-6 flex-grow">
      <div v-if="title" class="px-3 text-[10px] font-black uppercase tracking-widest text-slate-400">{{ title }}</div>
      <div class="grid grid-cols-2 gap-2">
        <NuxtLink 
          v-for="item in items" 
          :key="item.title"
          :to="item.to"
          class="flex gap-4 p-4 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all group"
        >
          <div class="w-10 h-10 flex-shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
            <UIcon :name="item.icon" class="text-xl" />
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-sm font-bold text-slate-900 dark:text-white">{{ item.title }}</div>
            <div class="text-[10px] text-slate-500 leading-tight">{{ item.desc }}</div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div v-if="banner" class="w-48 p-6 flex flex-col justify-between overflow-hidden rounded-[1.5rem] bg-slate-900 dark:bg-black relative group shadow-xl border border-slate-800">
      <div class="absolute inset-0 bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div class="flex flex-col gap-2 relative z-10">
        <h3 class="text-lg font-black leading-tight text-white">{{ banner.title }}</h3>
        <p class="text-[10px] text-slate-400">{{ banner.desc }}</p>
      </div>
      <NuxtLink :to="banner.to" class="text-xs font-black uppercase tracking-widest text-emerald-400 hover:text-white transition-colors relative z-10">
        {{ banner.cta }} →
      </NuxtLink>
    </div>
  </div>
</template>
