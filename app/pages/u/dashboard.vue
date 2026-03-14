<script setup lang="ts">
definePageMeta({ 
  layout: 'dashboard',
  middleware: 'auth'
})

useHead({ title: 'Dashboard | SaaSBot' })

const stats = [
  { label: 'Total Messages', value: '12,840', trend: '+12%', icon: 'i-fluent-chat-multiple-24-regular' },
  { label: 'Active Sessions', value: '42', trend: '+5%', icon: 'i-fluent-person-available-24-regular' },
  { label: 'Conversion Rate', value: '68%', trend: '+2%', icon: 'i-fluent-arrow-trending-up-24-regular' },
  { label: 'AI Accuracy', value: '94%', trend: 'Stable', icon: 'i-fluent-brain-circuit-24-regular' }
]
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <UCard v-for="stat in stats" :key="stat.label">
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/30">
            <UIcon :name="stat.icon" class="text-xl text-emerald-500" />
          </div>
          <UBadge color="emerald" variant="subtle" size="xs">{{ stat.trend }}</UBadge>
        </div>
        <div class="text-[10px] uppercase font-black text-slate-500">{{ stat.label }}</div>
        <div class="text-2xl font-bold mt-1 text-slate-900 dark:text-white">{{ stat.value }}</div>
      </UCard>
    </div>

    <!-- Main Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left: WhatsApp Scanner -->
      <WaScannerPanel />

      <!-- Right: System Activity -->
      <UCard>
        <template #header>
          <h3 class="font-bold">System Activity</h3>
        </template>
        
        <div class="flex flex-col gap-6">
          <div v-for="i in 5" :key="i" class="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800 last:border-none">
            <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div class="flex-grow">
              <div class="text-sm font-bold">New lead captured via WhatsApp</div>
              <div class="text-[10px] text-slate-500">2 minutes ago</div>
            </div>
            <UBadge size="xs" variant="outline" color="emerald">ACTIVE</UBadge>
          </div>
        </div>

        <!-- Mock Chart -->
        <div class="mt-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 flex flex-col justify-end gap-2 min-h-[200px] border border-slate-100 dark:border-slate-800">
          <div class="flex items-end justify-between h-32 gap-2">
            <div v-for="h in [40, 70, 50, 90, 60, 80, 100]" :key="h" 
              class="flex-grow rounded-t-lg bg-emerald-500/40 hover:bg-emerald-500 transition-all cursor-pointer" 
              :style="{ height: h + '%' }" 
            />
          </div>
          <div class="flex justify-between">
            <span v-for="d in ['M', 'T', 'W', 'T', 'F', 'S', 'S']" :key="d" class="flex-grow text-center text-[9px] text-slate-500">{{ d }}</span>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
