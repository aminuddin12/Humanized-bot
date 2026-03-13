<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import { useAuth } from '~/composables/useAuth'

definePageMeta({ 
  layout: 'dashboard',
  middleware: 'auth'
})

const { user } = useAuth()
const form = ref({
  name: user.value?.name || '',
  email: user.value?.email || '',
  notifications: true
})
</script>

<template>
  <BaseBox class="max-w-2xl">
    <BaseSurface variant="default" padding="xl" class="rounded-[2.5rem] border shadow-sm">
      <BaseBox display="flex" flexDirection="col" gap="lg">
        <BaseBox>
          <BaseTypography variant="h3">Account Settings</BaseTypography>
          <BaseTypography variant="p" color="muted" class="text-sm">Manage your profile and account preferences.</BaseTypography>
        </BaseBox>

        <BaseBox display="flex" flexDirection="col" gap="md">
          <BaseBox display="flex" flexDirection="col" gap="xs">
            <BaseTypography variant="detail" class="text-[10px] font-black uppercase">Full Name</BaseTypography>
            <input 
              v-model="form.name"
              type="text" 
              class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 outline-none focus:border-emerald-500 transition-all text-sm"
            />
          </BaseBox>

          <BaseBox display="flex" flexDirection="col" gap="xs">
            <BaseTypography variant="detail" class="text-[10px] font-black uppercase">Email Address</BaseTypography>
            <input 
              v-model="form.email"
              type="email" 
              disabled
              class="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none opacity-50 text-sm cursor-not-allowed"
            />
          </BaseBox>

          <BaseBox display="flex" alignItems="center" justifyContent="between" class="py-4 border-t border-b">
            <BaseBox>
              <BaseTypography variant="p" class="text-sm font-bold">Email Notifications</BaseTypography>
              <BaseTypography variant="p" color="muted" class="text-xs">Receive weekly activity reports.</BaseTypography>
            </BaseBox>
            <!-- Mock Toggle -->
            <BaseBox 
              class="w-12 h-6 rounded-full relative cursor-pointer transition-all" 
              :class="form.notifications ? 'bg-emerald-500' : 'bg-gray-300'"
              @click="form.notifications = !form.notifications"
            >
              <BaseBox class="w-4 h-4 bg-white rounded-full absolute top-1 transition-all" :class="form.notifications ? 'left-7' : 'left-1'" />
            </BaseBox>
          </BaseBox>

          <BaseButton class="self-start px-10">Save Changes</BaseButton>
        </BaseBox>
      </BaseBox>
    </BaseSurface>
  </BaseBox>
</template>
