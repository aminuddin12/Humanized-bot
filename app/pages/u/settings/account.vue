<script setup lang="ts">
import type { User } from '~/composables/useAuth'

definePageMeta({ 
  layout: 'dashboard',
  middleware: 'auth'
})

const { user } = useAuth()
const form = ref({
  name: (user.value as User)?.name || '',
  email: (user.value as User)?.email || '',
  notifications: true
})
</script>

<template>
  <div class="max-w-2xl">
    <UCard>
      <template #header>
        <h3 class="font-bold text-lg text-slate-900 dark:text-white">Account Settings</h3>
        <p class="text-sm text-slate-500">Manage your profile and account preferences.</p>
      </template>

      <div class="flex flex-col gap-6">
        <UFormGroup label="Full Name" help="Used for your profile and notifications.">
          <UInput v-model="form.name" placeholder="John Doe" icon="i-fluent-person-24-regular" />
        </UFormGroup>

        <UFormGroup label="Email Address">
          <UInput v-model="form.email" disabled icon="i-fluent-mail-24-regular" />
        </UFormGroup>

        <div class="flex items-center justify-between py-4 border-t border-b border-slate-100 dark:border-slate-800">
          <div>
            <div class="text-sm font-bold text-slate-900 dark:text-white">Email Notifications</div>
            <div class="text-xs text-slate-500">Receive weekly activity reports.</div>
          </div>
          <UToggle v-model="form.notifications" color="emerald" />
        </div>

        <div class="flex justify-end">
          <UButton color="primary" icon="i-fluent-save-24-regular">Save Changes</UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>
