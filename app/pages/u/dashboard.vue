<script setup lang="ts">
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'
import WaScannerPanel from '~/components/dashboard/WaScannerPanel.vue'

definePageMeta({ 
  layout: 'dashboard',
  middleware: 'auth'
})

useHead({ title: 'Dashboard | SaaS Bot' })

const stats = [
  { label: 'Total Messages', value: '12,840', trend: '+12%', icon: 'i-fluent-chat-multiple-24-regular' },
  { label: 'Active Sessions', value: '42', trend: '+5%', icon: 'i-fluent-person-available-24-regular' },
  { label: 'Conversion Rate', value: '68%', trend: '+2%', icon: 'i-fluent-arrow-trending-up-24-regular' },
  { label: 'AI Accuracy', value: '94%', trend: 'Stable', icon: 'i-fluent-brain-circuit-24-regular' }
]
</script>

<template>
  <BaseBox display="flex" flexDirection="col" gap="lg">
    <!-- Stats Grid -->
    <BaseGrid cols="4" gap="md">
      <BaseCard v-for="stat in stats" :key="stat.label" padding="lg" radius="2xl" class="shadow-sm">
        <BaseBox display="flex" alignItems="center" justifyContent="between" class="mb-4">
          <BaseBox background="dark" rounded="lg" class="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-black/20">
            <UIcon :name="stat.icon" class="text-xl text-emerald-500" />
          </BaseBox>
          <BaseBadge color="emerald" size="sm">{{ stat.trend }}</BaseBadge>
        </BaseBox>
        <BaseTypography variant="detail" color="muted" class="text-[10px] uppercase font-black">{{ stat.label }}</BaseTypography>
        <BaseTypography variant="h2" class="text-2xl mt-1">{{ stat.value }}</BaseTypography>
      </BaseCard>
    </BaseGrid>

    <!-- Main Section -->
    <BaseGrid cols="2" gap="lg">
      <!-- Left: WhatsApp Scanner -->
      <WaScannerPanel />

      <!-- Right: System Activity -->
      <BaseCard padding="xl" radius="3xl" class="flex flex-col gap-6">
        <BaseTypography variant="h3">System Activity</BaseTypography>
        
        <BaseBox display="flex" flexDirection="col" gap="md">
          <BaseBox v-for="i in 5" :key="i" display="flex" alignItems="center" gap="md" class="pb-4 border-b last:border-none">
            <BaseBox background="dark" rounded="full" class="w-2 h-2 bg-emerald-500" />
            <BaseBox class="flex-grow">
              <BaseTypography variant="p" class="text-sm font-bold">New lead captured via WhatsApp</BaseTypography>
              <BaseTypography variant="detail" color="muted" class="text-[10px]">2 minutes ago</BaseTypography>
            </BaseBox>
            <BaseTypography variant="detail" color="accent" class="text-[10px] font-black">ACTIVE</BaseTypography>
          </BaseBox>
        </BaseBox>

        <!-- Mock Chart -->
        <BaseBox class="mt-4 flex-grow bg-gray-50 dark:bg-black/20 rounded-2xl p-6 flex flex-col justify-end gap-2 min-h-[200px]">
          <BaseBox display="flex" alignItems="end" justifyContent="between" class="h-32">
            <BaseBox v-for="h in [40, 70, 50, 90, 60, 80, 100]" :key="h" 
              background="dark" 
              class="w-8 rounded-t-lg bg-emerald-500/40 hover:bg-emerald-500 transition-all cursor-pointer" 
              :style="{ height: h + '%' }" 
            />
          </BaseBox>
          <BaseBox display="flex" justifyContent="between">
            <BaseTypography v-for="d in ['M', 'T', 'W', 'T', 'F', 'S', 'S']" :key="d" variant="detail" color="muted" class="w-8 text-center text-[9px]">{{ d }}</BaseTypography>
          </BaseBox>
        </BaseBox>
      </BaseCard>
    </BaseGrid>
  </BaseBox>
</template>
